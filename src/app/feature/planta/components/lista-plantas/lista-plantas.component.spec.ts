import { CommonModule } from '@angular/common';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { Planta } from '../../shared/models/planta';
import { PlantaService } from '../../shared/services/planta.service';
import { ListaPlantasComponent } from './lista-plantas.component';

describe('ListaPlantasComponent', () => {
  let component: ListaPlantasComponent;
  let fixture: ComponentFixture<ListaPlantasComponent>;
  let plantaService: PlantaService;
  const listaPlantas: Planta[]= [
    {
      idPlanta: 0,
      nombre: 'Orquidea Cattleya triannae',
      descripcion: 'flor Internacional',
      fechaIngreso: new Date('2022-06-14'),
      cantidad: 14,
      valor: 80000.00,
      categoria: 'PLANTASDEFLOR'
    },
    {
      idPlanta: 12,
      nombre: 'Margarita',
      descripcion: 'flor amarillenta',
      fechaIngreso: new Date('2022-06-08'),
      cantidad: 100,
      valor: 12000.00,
      categoria: 'PLANTASDEFLOR'
    },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPlantasComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [PlantaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlantasComponent);
    component = fixture.componentInstance;
    plantaService = TestBed.inject(PlantaService);
    spyOn(plantaService, 'obtenerListaDePlantas').and.returnValue(
      of(listaPlantas)
    );
    fixture.detectChanges();
  });

  it('Deberia consultar la lista de plantas', () => {
    expect(component).toBeTruthy();
    component.listaPlantas.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });

  it('Deberia consultar la lista de plantas al arranque del componente', () => {
    component.ngOnInit();
    expect(plantaService.obtenerListaDePlantas).toHaveBeenCalled();
  });

  it('Deberia eliminar registro',() => {
    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.eliminarPlanta(1);
    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Registro eliminado exitosamente!');
  });

  it('Deberia ir a crear la planta', () => {

    const spyOnRouter = spyOn((component as any).router,'navigate');
    component.crearPlantaForm();
    expect(spyOnRouter).toHaveBeenCalledOnceWith(['/planta/crear-planta']);
  });

  it('Deberia ir A ver detalles de la planta', () => {

    const spyOnRouter = spyOn((component as any).router,'navigate');
    const id = 1;
    component.verDetallesDeLaPlanta(id);
    expect(spyOnRouter).toHaveBeenCalledOnceWith(['/planta/detalles-planta', id]);
  });

  it('Deberia ir actualizar la planta', () => {

    const spyOnRouter = spyOn((component as any).router,'navigate');
    const id = 1;
    component.actualizarPlanta(id);
    expect(spyOnRouter).toHaveBeenCalledOnceWith(['/planta/actualizar-planta', id]);
  });

});


