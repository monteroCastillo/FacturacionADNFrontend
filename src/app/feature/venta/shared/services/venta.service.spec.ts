import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { VentaService } from './venta.service';

describe('VentaService', () => {

  let service: VentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VentaService, HttpService]
    });

    service = TestBed.inject(VentaService);
  });

  it('Pruebas al service de venta', () => {
    expect(service).toBeTruthy();
  });
});
