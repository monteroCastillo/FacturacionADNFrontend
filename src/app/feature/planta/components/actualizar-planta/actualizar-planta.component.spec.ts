import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPlantaComponent } from './actualizar-planta.component';

describe('ActualizarPlantaComponent', () => {
  let component: ActualizarPlantaComponent;
  let fixture: ComponentFixture<ActualizarPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
