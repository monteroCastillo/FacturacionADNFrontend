import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlantasComponent } from './lista-plantas.component';

describe('ListaPlantasComponent', () => {
  let component: ListaPlantasComponent;
  let fixture: ComponentFixture<ListaPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPlantasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
