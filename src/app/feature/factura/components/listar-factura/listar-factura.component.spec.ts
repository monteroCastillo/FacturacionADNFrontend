import { CommonModule } from '@angular/common';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
//import { of } from 'rxjs';
import { FacturaService } from '../../shared/service/factura.service';
import { ListarFacturaComponent } from './listar-factura.component';

describe('ListarFacturaComponent', () => {
  //let facturaService: FacturaService;
  let component: ListarFacturaComponent;
  let fixture: ComponentFixture<ListarFacturaComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFacturaComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [FacturaService, HttpService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFacturaComponent);
    component = fixture.componentInstance;
    //facturaService = TestBed.inject(FacturaService);
    fixture.detectChanges();
  });

  it('Deberia encontrar una factura', () => {
    expect(component).toBeTruthy();
  });

  /* it('deberia consultar Factura por id', () => {
    spyOn(facturaService, 'obtenerFacturaPorId').withArgs(1).and.returnValue(
      of()
    );
    facturaService.obtenerFacturaPorId(1);
    expect(facturaService.obtenerFacturaPorId).toHaveBeenCalled();
  }); */
});


