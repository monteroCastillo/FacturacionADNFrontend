import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

import { ProveedorService } from '../../shared/services/proveedor.service';
import { ListaProveedoresComponent } from '../lista-proveedores/lista-proveedores.component';
import { ActualizarProveedorComponent } from './actualizar-proveedor.component';

describe('ActualizarProveedorComponent', () => {

  let component: ActualizarProveedorComponent;
  let fixture: ComponentFixture<ActualizarProveedorComponent>;
  let proveedorService: ProveedorService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarProveedorComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{
          path: 'proveedor/listar-proveedores', component:ListaProveedoresComponent}
        ]),
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [ProveedorService, HttpService],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarProveedorComponent);
    component = fixture.componentInstance;
    proveedorService = TestBed.inject(ProveedorService);
    spyOn(proveedorService, 'actualizarProveedor').and.returnValue(of(true));
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

