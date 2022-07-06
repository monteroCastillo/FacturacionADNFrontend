import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { ActualizarPlantaComponent } from './feature/planta/components/actualizar-planta/actualizar-planta.component';
import { CrearPlantaComponent } from './feature/planta/components/crear-planta/crear-planta.component';
import { DetallesPlantaComponent } from './feature/planta/components/detalles-planta/detalles-planta.component';
import { ListaPlantasComponent } from './feature/planta/components/lista-plantas/lista-plantas.component';
import { ActualizarProveedorComponent } from './feature/proveedor/components/actualizar-proveedor/actualizar-proveedor.component';
import { CrearProveedorComponent } from './feature/proveedor/components/crear-proveedor/crear-proveedor.component';
import { DetallesProveedorComponent } from './feature/proveedor/components/detalles-proveedor/detalles-proveedor.component';
import { VentaComponent } from './feature/venta/components/venta/venta.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  //{ path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  {path: 'planta',component:ListaPlantasComponent},
  {path: 'crear-planta',component : CrearPlantaComponent},
  {path: 'actualizar-planta/:id',component : ActualizarPlantaComponent},
  {path: 'detalles-planta/:id',component : DetallesPlantaComponent},
  {path: 'proveedor',component : ListaPlantasComponent},
  {path: 'crear-proveedor',component : CrearProveedorComponent},
  {path: 'actualizar-proveedor/:id',component : ActualizarProveedorComponent},
  {path: 'detalles-proveedor/:id',component :DetallesProveedorComponent },
  {path: 'venta/:fecha',component :VentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
