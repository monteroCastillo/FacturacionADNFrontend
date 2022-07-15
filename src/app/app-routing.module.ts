import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { CrearFacturaComponent } from './feature/factura/components/crear-factura/crear-factura.component';
import { ListarFacturaComponent } from './feature/factura/components/listar-factura/listar-factura.component';
import { VentaComponent } from './feature/venta/components/venta/venta.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard] },
  //{ path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },

  {
    path: 'planta',
    loadChildren: () =>
      import('./feature/planta/planta.module').then((m) => m.PlantaModule),
  },

  {
    path: 'proveedor',
    loadChildren: () =>
      import('./feature/proveedor/proveedor.module').then((m) =>m.ProveedorModule),
  },

  { path: 'venta/:fecha', component: VentaComponent },
  { path: 'crear-factura', component: CrearFacturaComponent },
  { path: 'listar-factura', component: ListarFacturaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
