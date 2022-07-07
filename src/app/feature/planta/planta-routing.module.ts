import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarPlantaComponent } from './components/actualizar-planta/actualizar-planta.component';
import { CrearPlantaComponent } from './components/crear-planta/crear-planta.component';
import { DetallesPlantaComponent } from './components/detalles-planta/detalles-planta.component';
import { ListaPlantasComponent } from './components/lista-plantas/lista-plantas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'actualizar-planta/:id',
        component: ActualizarPlantaComponent,
      },
      {
        path: 'crear-planta',
        component: CrearPlantaComponent,
      },
      {
        path: 'detalles-planta/:id',
        component: DetallesPlantaComponent,
      },
      {
        path: 'lista-planta',
        component: ListaPlantasComponent,
      },
      {
        path: '**',
        redirectTo: 'lista-planta',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantaRoutingModule { }
