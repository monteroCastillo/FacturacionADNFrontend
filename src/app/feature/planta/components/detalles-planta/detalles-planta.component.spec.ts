import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
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
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [PlantaService, HttpService],
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
});
