import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
//import { Planta } from '../../shared/models/planta';

import { PlantaService } from '../../shared/services/planta.service';
import { DetallesPlantaComponent } from './detalles-planta.component';

describe('DetallesPlantaComponent', () => {

  let component: DetallesPlantaComponent;
  let fixture: ComponentFixture<DetallesPlantaComponent>;
  let plantaService: PlantaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesPlantaComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [ DetallesPlantaComponent,{provide: ActivatedRoute, useValue:{snapshot:{params:{'id':'1'}}}} ,
        HttpService, PlantaService,],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPlantaComponent);
    component = fixture.componentInstance;
    plantaService = TestBed.inject(PlantaService);
    spyOn(plantaService, 'crearPlanta').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('Deberia dar los detalles de la planta', () => {
    expect(component).toBeTruthy();
  });



  /*  it('deberia consultar planta por id', () => {
    spyOn(plantaService, 'obtenerPlantaPorId').withArgs(1).and.returnValue(
      of()
    );
    plantaService.obtenerPlantaPorId(1);
    expect(plantaService.obtenerPlantaPorId).toHaveBeenCalled();
  }); */



});
