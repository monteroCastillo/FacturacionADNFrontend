import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { PlantaService } from '../../shared/services/planta.service';
import { ListaPlantasComponent } from '../lista-plantas/lista-plantas.component';

import { ActualizarPlantaComponent } from './actualizar-planta.component';

describe('ActualizarPlantaComponent', () => {

  let component: ActualizarPlantaComponent;
  let fixture: ComponentFixture<ActualizarPlantaComponent>;
  let plantaService: PlantaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarPlantaComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{
          path: 'planta/lista-plantas', component:ListaPlantasComponent}
        ]),
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [PlantaService, HttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPlantaComponent);
    component = fixture.componentInstance;
    plantaService = TestBed.inject(PlantaService);
    spyOn(plantaService, 'actualizarPlanta').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('Deberia actualizar planta', () => {
    expect(component).toBeTruthy();
  });


  it('deberia consultar planta por id', () => {
    spyOn(plantaService, 'obtenerPlantaPorId').withArgs(1).and.returnValue(
      of());

    plantaService.obtenerPlantaPorId(1);
    expect(plantaService.obtenerPlantaPorId).toHaveBeenCalled();
  });

  it('Debe lanzar mensaje cuando actualiza una planta ', () => {
    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.actualizarPlanta();
    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Registro realizado exitosamente!');
  });


});
