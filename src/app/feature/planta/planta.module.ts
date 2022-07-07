import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActualizarPlantaComponent } from './components/actualizar-planta/actualizar-planta.component';
import { CrearPlantaComponent } from './components/crear-planta/crear-planta.component';
import { DetallesPlantaComponent } from './components/detalles-planta/detalles-planta.component';
import { ListaPlantasComponent } from './components/lista-plantas/lista-plantas.component';
import { PlantaRoutingModule } from './planta-routing.module';

@NgModule({
  declarations: [
    ActualizarPlantaComponent,
    CrearPlantaComponent,
    DetallesPlantaComponent,
    ListaPlantasComponent
  ],
  imports:[
    CommonModule,
    PlantaRoutingModule,
    FormsModule
  ]

})
export class PlantaModule { }
