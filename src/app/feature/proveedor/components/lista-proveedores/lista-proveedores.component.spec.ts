import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { Proveedor } from '../../shared/models/proveedor';
import { ProveedorService } from '../../shared/services/proveedor.service';
import { ListaProveedoresComponent } from './lista-proveedores.component';

describe('ListaProveedoresComponent', () => {
  let component: ListaProveedoresComponent;
  let fixture: ComponentFixture<ListaProveedoresComponent>;
  let proveedorService: ProveedorService;
  const listaProveedores: Proveedor[] = [
    {
      id: 1,
      nombre: 'plantas y plantas',
      direccion: 'Av vasquez Cobo',
      telefono: '5656565',
      paginaWeb: 'plantasyplantas.com.co',
    },
    {
      id: 2,
      nombre: 'Vivero Marinela',
      direccion: 'Calle 26 # 25-46',
      telefono: '2481476',
      paginaWeb: 'viveromarinela.com.co',
    },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProveedoresComponent],
      imports: [CommonModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ProveedorService, HttpService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProveedoresComponent);
    component = fixture.componentInstance;
    proveedorService = TestBed.inject(ProveedorService);
    spyOn(proveedorService, 'consultar').and.returnValue(
      of(listaProveedores)
    );
    fixture.detectChanges();
  });

  it('Deberian crearse dos proveedores', () => {
    expect(component).toBeTruthy();
  });


  it('Deberian crearse  proveedores', () => {
    component.listaProveedores.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });

  it('Deberia consultar la lista de proveedores', () => {
    component.ngOnInit();
    expect(proveedorService.consultar).toHaveBeenCalled();
  });

  it('Deberia eliminar registro de proveedor',() => {
    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.eliminarProveedor(1);
    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Registro eliminado exitosamente!');
  });

  it('Deberia ir a crear un proveedor', () => {
    const spyOnRouter = spyOn((component as any).router,'navigate');
    component.crearProveedorForm();
    expect(spyOnRouter).toHaveBeenCalledOnceWith(['proveedor/crear-proveedor']);
  });

  it('Deberia ir A ver detalles de un proveedor', () => {

    const spyOnRouter = spyOn((component as any).router,'navigate');
    const id = 1;
    component.verDetallesDelProveedor(id);
    expect(spyOnRouter).toHaveBeenCalledOnceWith(['proveedor/detalles-proveedor', id]);
  });

  it('Deberia actualizar el proveedor', () => {

    const spyOnRouter = spyOn((component as any).router,'navigate');
    const id = 1;
    component.actualizarProveedor(id);
    expect(spyOnRouter).toHaveBeenCalledOnceWith(['proveedor/actualizar-proveedor', id]);
  });

});
