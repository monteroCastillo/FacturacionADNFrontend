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
import { CrearPlantaComponent } from './crear-planta.component';

describe('CrearPlantaComponent', () => {
  let component: CrearPlantaComponent;
  let fixture: ComponentFixture<CrearPlantaComponent>;
  let plantaService: PlantaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearPlantaComponent],
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
    fixture = TestBed.createComponent(CrearPlantaComponent);
    component = fixture.componentInstance;
    plantaService = TestBed.inject(PlantaService);
    spyOn(plantaService, 'crearPlanta').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe lanzar mensaje cuando crea planta ', () => {
    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.crearPlanta();
    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Registro realizado exitosamente!');
  });


});
