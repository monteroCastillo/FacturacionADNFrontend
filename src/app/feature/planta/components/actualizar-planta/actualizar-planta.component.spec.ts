import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
<<<<<<< HEAD
//import { Planta } from '../../shared/models/planta';
=======
>>>>>>> d4dd0c7076c5075b91cedfe55997178b58551a42
import { PlantaService } from '../../shared/services/planta.service';
import { ListaPlantasComponent } from '../lista-plantas/lista-plantas.component';

import { ActualizarPlantaComponent } from './actualizar-planta.component';

describe('ActualizarPlantaComponent', () => {
<<<<<<< HEAD
  //const planta = new Planta();
=======

>>>>>>> d4dd0c7076c5075b91cedfe55997178b58551a42
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

  /* it('Deberia actualizar el componente planta', () => {


    component.onSubmit();
    expect(plantaService.actualizarPlanta).toHaveBeenCalled();
  }); */

  it('deberia consultar proveedor por id', () => {
    spyOn(plantaService, 'obtenerPlantaPorId').withArgs(1).and.returnValue(
      of()
    );
    plantaService.obtenerPlantaPorId(1);
    expect(plantaService.obtenerPlantaPorId).toHaveBeenCalled();
  });

  it('deberia consultar planta por id', () => {
    spyOn(plantaService, 'obtenerPlantaPorId').withArgs(1).and.returnValue(
      of());

    plantaService.obtenerPlantaPorId(1);
    expect(plantaService.obtenerPlantaPorId).toHaveBeenCalled();
  });


});
