import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { ListaProveedoresComponent } from '../lista-proveedores/lista-proveedores.component';
//import { ProveedorService } from '../../shared/services/proveedor.service';
import { DetallesProveedorComponent } from './detalles-proveedor.component';

describe('DetallesProveedorComponent', () => {
  let component: DetallesProveedorComponent;
  let fixture: ComponentFixture<DetallesProveedorComponent>;
  //let proveedorService: ProveedorService;
  let espiaServicio: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesProveedorComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{
          path: 'proveedor/listar-proveedor', component:ListaProveedoresComponent}
        ]),
        FormsModule,
      ],

      providers: [ HttpService, {provide: ActivatedRoute,
        useValue: {snapshot: {params: {'id': 22}}}}],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesProveedorComponent);
    component = fixture.componentInstance;
    espiaServicio = spyOn((component as any).proveedorServicio,'obtenerProveedorPorId').and.returnValue(of(
      {
        id: 22,
        nombre: 'plantas y plantas',
        direccion: 'Av vasquez Cobo',
        telefono: '5656565',
        paginaWeb: 'plantasyplantas.com.co',
      }
    ));
    //spyOn(proveedorService, 'crearProveedor').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('Deberia dar los detalles del proveedor', () => {
    expect(component).toBeTruthy();
  });

  it('deberia consultar proveedor por id',  (done) => {
    (component as any).proveedorServicio.obtenerProveedorPorId(22).subscribe(()=>{
      done();
    });
    component.ngOnInit();
    expect(espiaServicio).toHaveBeenCalled();
  });

  it('Deberia ir atras', () => {
    const spyOnRouter = spyOn((component as any).router,'navigate');
    component.irAtras();
    expect(spyOnRouter).toHaveBeenCalledOnceWith(['/proveedor/listar-proveedor']);
  });
});

