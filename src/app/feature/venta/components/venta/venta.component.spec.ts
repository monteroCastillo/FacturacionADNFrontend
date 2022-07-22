import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { VentaService } from '../../shared/services/venta.service';
import { VentaComponent } from './venta.component';

describe('VentaComponent', () => {
  let component: VentaComponent;
  let fixture: ComponentFixture<VentaComponent>;
  let ventaService: VentaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentaComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [VentaService, HttpService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaComponent);
    component = fixture.componentInstance;
    ventaService = TestBed.inject(VentaService);
    spyOn(ventaService,'obtenerVenta').and.returnValue(
      of()
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

<<<<<<< HEAD


=======
  describe ('Test a calcular venta', ()=>{
    it('Deberia retornar la suma de las ventas del dia', () =>{

      component.calcularSuma();
      expect(ventaService.obtenerVenta).toHaveBeenCalled();

    });
  });
>>>>>>> d4dd0c7076c5075b91cedfe55997178b58551a42
});

