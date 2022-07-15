import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { ProveedorService } from './proveedor.service';

fdescribe('ProveedorService', () => {
  let httpMock: HttpTestingController;
  let service: ProveedorService;


  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProveedorService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ProveedorService);
  });

  it('should be created', () => {
    const proveedorService: ProveedorService = TestBed.inject(ProveedorService);
    expect(proveedorService).toBeTruthy();
  });

  it('Deberia listar Proveedores', () =>{
    const dummyProveedor ={
      data:[
        {
          id: 22,
          nombre: 'plantas y plantas',
          direccion: 'Av vasquez Cobo',
          telefono: '5656565',
          paginaWeb: 'plantasyplantas.com.co',
        },
        {
          id: 23,
          nombre: 'Vivero Marinela',
          direccion: 'Calle 23 # 25-46',
          telefono: '2481476',
          paginaWeb: 'viveromarinela.com.co',
        }
      ]
    };
    service.consultar().subscribe(proveedores =>{
      expect(proveedores.length).toBe(2);
      expect(proveedores).toEqual(dummyProveedor.data);
    });
    const req = httpMock.expectOne('http://localhost:8083/proveedores/index');
    expect(req.request.method).toBe('GET');
    req.flush(dummyProveedor.data);
  });

  it('Deberia crear un proveedor', () =>{
    const dummyProveedor = {
      id: 22,
      nombre: 'plantas y plantas',
      direccion: 'Av vasquez Cobo',
      telefono: '5656565',
      paginaWeb: 'plantasyplantas.com.co',
    };
    service.crearProveedor(dummyProveedor).subscribe((respuesta)=>{
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne('http://localhost:8083/apiProveedor/guardar');
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body:true}));
  });



  it('Deberia actualizar un proveedor', () =>{
    const dummyProveedor = {
      id: 22,
      nombre: 'plantas y plantas',
      direccion: 'Av vasquez Cobo',
      telefono: '5656565',
      paginaWeb: 'plantasyplantas.com.co',
    };
    service.actualizarProveedor(dummyProveedor).subscribe((respuesta)=>{
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne('http://localhost:8083/apiProveedor/actualizar');
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body:true}));
  });

  it('deberia eliminar un proveedor', () => {
    const dummyPlantas = 1;

    service.eliminarProveedor(dummyPlantas).subscribe((respuesta) => {
      expect(respuesta).toEqual(null);
    });
    const baseURL = 'http://localhost:8083/apiProveedor/eliminar';
    const req = httpMock.expectOne(`${baseURL}/1`);
    expect(req.request.method).toBe('DELETE');

  });
});
