import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Proveedor } from '../../shared/models/proveedor';
import { ProveedorService } from '../../shared/services/proveedor.service';
import { ListaProveedoresComponent } from './lista-proveedores.component';

describe('ListaProveedoresComponent', () => {
  let component: ListaProveedoresComponent;
  let fixture: ComponentFixture<ListaProveedoresComponent>;
  let proveedorService: ProveedorService;
  const listaProveedores: Proveedor[] = [
    {
      id: 1,
      nombre: 'plantas y plantas',
      direccion: 'Av vasquez Cobo',
      telefono: '5656565',
      paginaWeb: 'plantasyplantas.com.co',
    },
    {
      id: 2,
      nombre: 'Vivero Marinela',
      direccion: 'Calle 23 # 25-46',
      telefono: '2481476',
      paginaWeb: 'viveromarinela.com.co',
    },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProveedoresComponent],
      imports: [CommonModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ProveedorService, HttpService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProveedoresComponent);
    component = fixture.componentInstance;
    proveedorService = TestBed.inject(ProveedorService);
    spyOn(proveedorService, 'consultar').and.returnValue(
      of(listaProveedores)
    );
    fixture.detectChanges();
  });

  it('Deberian crearse dos proveedores', () => {
    expect(component).toBeTruthy();
  });


  it('Deberian crearse dos proveedores', () => {
    component.listaProveedores.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });

  /*  it('Deberia consultar la lista de proveedores', () => {
    component.ngOnInit();
    expect(proveedorService.consultar).toHaveBeenCalled();
  }); */



});
