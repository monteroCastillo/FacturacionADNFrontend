import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
//import Swal from 'sweetalert2';
import { ProveedorService } from '../../shared/services/proveedor.service';
import { ListaProveedoresComponent } from '../lista-proveedores/lista-proveedores.component';

import { CrearProveedorComponent } from './crear-proveedor.component';

describe('CrearProveedorComponent', () => {
  let component: CrearProveedorComponent;
  let fixture: ComponentFixture<CrearProveedorComponent>;
  let proveedorService: ProveedorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearProveedorComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{
          path: 'proveedor/listar-proveedor', component:ListaProveedoresComponent}
        ]),
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [ProveedorService, HttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProveedorComponent);
    component = fixture.componentInstance;
    proveedorService = TestBed.inject(ProveedorService);
    spyOn(proveedorService, 'crearProveedor').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe lanzar mensaje cuando crea planta ', () => {
    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.crearProveedor();
    expect(Swal.isVisible()).toBeTruthy();
    expect(Swal.getTitle().textContent).toEqual('Registro realizado exitosamente!');
  });

});
