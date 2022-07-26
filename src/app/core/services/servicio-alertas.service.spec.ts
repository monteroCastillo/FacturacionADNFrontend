import { TestBed } from '@angular/core/testing';

import { ServicioAlertasService } from './servicio-alertas.service';

describe('ServicioAlertasService', () => {
  let service: ServicioAlertasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAlertasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
