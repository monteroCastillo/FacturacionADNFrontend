import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { PlantaService } from '../../shared/services/planta.service';
import { ListaPlantasComponent } from '../lista-plantas/lista-plantas.component';
import { DetallesPlantaComponent } from './detalles-planta.component';

describe('DetallesPlantaComponent', () => {

  let component: DetallesPlantaComponent;
  let fixture: ComponentFixture<DetallesPlantaComponent>;
  let espiaServicio: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesPlantaComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{
          path: 'planta/lista-plantas', component:ListaPlantasComponent}
        ]),
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
    espiaServicio = spyOn((component as any).plantaServicio,'obtenerPlantaPorId').and.returnValue(of(
      {
        idPlanta: 1,
        nombre: 'Orquidea Cattleya triannae',
        descripcion: 'flor nacional',
        fechaIngreso: new Date('2022-6-14'),
        cantidad: 14,
        valor: 80000,
        categoria: 'PLANTASDEFLOR',
      }
    ));
    fixture.detectChanges();
  });

  it('Deberia dar los detalles de la planta', () => {
    expect(component).toBeTruthy();
  });

  it('deberia consultar proveedor por id',  (done) => {
    (component as any).plantaServicio.obtenerPlantaPorId(1).subscribe(()=>{
      done();
    });
    component.ngOnInit();
    expect(espiaServicio).toHaveBeenCalled();
  });

  it('Deberia ir atras', () => {
    const spyOnRouter = spyOn((component as any).router,'navigate');
    component.irAtras();
    expect(spyOnRouter).toHaveBeenCalledOnceWith(['/planta/lista-plantas']);
  });



});
