import { CommonModule } from '@angular/common';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { FacturaService } from '../../shared/service/factura.service';

import { CrearFacturaComponent } from './crear-factura.component';

describe('CrearFacturaComponent', () => {
  let component: CrearFacturaComponent;
  let fixture: ComponentFixture<CrearFacturaComponent>;
  let facturaService: FacturaService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFacturaComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [FacturaService, HttpService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFacturaComponent);
    component = fixture.componentInstance;
    facturaService = TestBed.inject(FacturaService);
    spyOn(facturaService, 'crearFactura').and.returnValue(of(true));
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe lanzar la alerta al crear la factura', () => {

    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.crearFactura();
    expect(window.alert).toHaveBeenCalled();
  });

  it('Debe tener una variable llamada plantasVendidasArray con valor [] por defecto', () => {
    expect(component.plantasVendidasArray).toEqual([]);
  });

});
