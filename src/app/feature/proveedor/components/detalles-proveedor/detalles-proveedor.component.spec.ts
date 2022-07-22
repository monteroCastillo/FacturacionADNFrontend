import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { ProveedorService } from '../../shared/services/proveedor.service';
import { DetallesProveedorComponent } from './detalles-proveedor.component';

describe('DetallesProveedorComponent', () => {
  let component: DetallesProveedorComponent;
  let fixture: ComponentFixture<DetallesProveedorComponent>;
  let proveedorService: ProveedorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesProveedorComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
      ],
      providers: [ProveedorService, HttpService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesProveedorComponent);
    component = fixture.componentInstance;
    proveedorService = TestBed.inject(ProveedorService);
    spyOn(proveedorService, 'crearProveedor').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('Deberia dar los detalles del proveedor', () => {
    expect(component).toBeTruthy();
  });

  it('deberia consultar proveedor por id', () => {
    spyOn(proveedorService, 'obtenerProveedorPorId').withArgs(1).and.returnValue(
      of()
    );
    proveedorService.obtenerProveedorPorId(1);
    expect(proveedorService.obtenerProveedorPorId).toHaveBeenCalled();
  });
});

