import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';


import { FacturaService } from '../../shared/service/factura.service';

import { ListarFacturaComponent } from './listar-factura.component';

describe('ListarFacturaComponent', () => {
  let component: ListarFacturaComponent;
  let fixture: ComponentFixture<ListarFacturaComponent>;





  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFacturaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
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
    fixture.detectChanges();
  });

  it('Deberia encontrar una factura', () => {
    expect(component).toBeTruthy();
  });
});


