 import { HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { PlantaService } from './planta.service';

describe('PlantaService', () => {
  let httpMock: HttpTestingController;
  let service: PlantaService;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PlantaService);
  });

  it('should be created', () => {
    const plantaService: PlantaService = TestBed.inject(PlantaService);
    expect(plantaService).toBeTruthy();
  });

  it('deberia listar plantas', () => {
    const dummyPlantas = {
      data: [
        {
          idPlanta: 1,
          nombre: 'Orquidea Cattleya triannae',
          descripcion: 'flor nacional',
          fechaIngreso: new Date('2022-6-14'),
          cantidad: 14,
          valor: 80000,
          categoria: 'PLANTASDEFLOR',
        },
        {
          idPlanta: 2,
          nombre: 'Margarita',
          descripcion: 'flor amarilla',
          fechaIngreso: new Date('2022-6-08'),
          cantidad: 100,
          valor: 12000,
          categoria: 'PLANTASDEFLOR',
        },
      ],
    };
    service.obtenerListaDePlantas().subscribe(plantas => {
      expect(plantas.length).toBe(2);
      expect(plantas).toEqual(dummyPlantas.data);
    });
    const req = httpMock.expectOne('http://localhost:8083/plantas/index');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPlantas.data);
  });


  it('deberia crear una planta', () => {
    const dummyPlanta = {
      idPlanta: 1,
      nombre: 'Orquidea Cattleya triannae',
      descripcion: 'flor nacional',
      fechaIngreso: new Date('2022-6-14'),
      cantidad: 14,
      valor: 80000,
      categoria: 'PLANTASDEFLOR',
    };
    service.crearPlanta(dummyPlanta).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne('http://localhost:8083/apiPlanta/crear');
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });


  it('deberia actualizar una planta', () => {
    const dummyPlantas = {
      idPlanta: 1,
      nombre: 'Orquidea Cattleya triannae',
      descripcion: 'flor nacional',
      fechaIngreso: new Date('2022-6-14'),
      cantidad: 14,
      valor: 80000,
      categoria: 'PLANTASDEFLOR',
    };
    service.actualizarPlanta(dummyPlantas).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(
      'http://localhost:8083/apiPlanta/actualizar'
    );
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia crear una planta por proveedor', () => {
    const dummyPlantaProveedor = {
      idProveedor:22,
      idPlanta:12
    };
    service.crearPlantaPorProveedor(dummyPlantaProveedor).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne('http://localhost:8083/apiPlantaPorProveedor/crear');
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});



