import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
        HttpClientModule,
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
});
