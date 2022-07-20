import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { PlantaService } from '../../shared/services/planta.service';

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
        RouterTestingModule,
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

  it('Deberia actualizar el componente planta', () => {


    component.onSubmit();
    expect(plantaService.actualizarPlanta).toHaveBeenCalled();
  });

  it('deberia consultar planta por id', () => {
    spyOn(plantaService, 'obtenerPlantaPorId').withArgs(1).and.returnValue(
      of());

    plantaService.obtenerPlantaPorId(1);
    expect(plantaService.obtenerPlantaPorId).toHaveBeenCalled();
  });


});
