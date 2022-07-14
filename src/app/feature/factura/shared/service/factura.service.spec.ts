import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { FacturaCrear } from '../model/factura-crear';
import { FacturaService } from './factura.service';

describe('FacturaService', () => {
  let httpMock: HttpTestingController;
  let service: FacturaService;

  beforeEach(() => {
    const injector =TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FacturaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(FacturaService);
  });

  it('should be created', () => {
    const facturaService: FacturaService = TestBed.inject(FacturaService);
    expect(facturaService).toBeTruthy();
  });


  it('Deberia crear una factura', () =>{
    const dummyFactura: FacturaCrear = {idCliente:111,
      fechaIngreso:new Date('2022-07-14'),
      comandoProductosFacturar:[
        { idPlanta: 13,
          nombre:'Jazmin',
          descripcion:'Planta con buen olor en las noches',
          fechaIngreso:new Date('2022-06-10'),
          cantidad:10,
          valor:25000,
          categoria:'PLANTASDEFLOR'}]};

    service.crearFactura(dummyFactura).subscribe((respuesta) =>{
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne('http://localhost:8083/factura/guardar');
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body:true}));

  });


});



