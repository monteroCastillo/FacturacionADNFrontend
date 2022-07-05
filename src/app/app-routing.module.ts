import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { ActualizarPlantaComponent } from './feature/planta/components/actualizar-planta/actualizar-planta.component';
import { CrearPlantaComponent } from './feature/planta/components/crear-planta/crear-planta.component';
import { DetallesPlantaComponent } from './feature/planta/components/detalles-planta/detalles-planta.component';
import { ListaPlantasComponent } from './feature/planta/components/lista-plantas/lista-plantas.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  //{ path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  {path: 'planta',component:ListaPlantasComponent},
  {path: 'crear-planta',component : CrearPlantaComponent},
  {path: 'actualizar-planta/:id',component : ActualizarPlantaComponent},
  {path: 'detalles-planta/:id',component : DetallesPlantaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
