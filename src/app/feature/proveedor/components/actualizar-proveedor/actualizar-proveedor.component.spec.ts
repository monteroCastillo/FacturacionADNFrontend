/* import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Proveedor } from '../../shared/models/proveedor';
import { ProveedorService } from '../../shared/services/proveedor.service';
import { ActualizarProveedorComponent } from './actualizar-proveedor.component';

describe('ActualizarProveedorComponent', () => {
  const proveedor = new Proveedor();
  let component: ActualizarProveedorComponent;
  let fixture: ComponentFixture<ActualizarProveedorComponent>;
  let proveedorService: ProveedorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarProveedorComponent],
      imports: [
        CommonModule,
        HttpClientModule,
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

  it('Deberia actualizar el componente proveedor', () => {

    proveedor.id = 23;
    proveedor.nombre = 'Vivero Marinela';
    proveedor.direccion = 'Calle 23 # 25-46';
    proveedor.telefono= '2481476';
    proveedor.paginaWeb= 'viveromarinela.com.co';

    component.onSubmit();
    expect(proveedorService.actualizarProveedor).toHaveBeenCalled();
  });
});
 */
