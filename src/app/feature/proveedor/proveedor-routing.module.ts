import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarProveedorComponent } from './components/actualizar-proveedor/actualizar-proveedor.component';
import { CrearProveedorComponent } from './components/crear-proveedor/crear-proveedor.component';
import { DetallesProveedorComponent } from './components/detalles-proveedor/detalles-proveedor.component';
import { ListaProveedoresComponent } from './components/lista-proveedores/lista-proveedores.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'actualizar-proveedor/:id',
        component: ActualizarProveedorComponent,
      },
      {
        path: 'crear-proveedor',
        component: CrearProveedorComponent,
      },
      {
        path: 'detalles-proveedor/:id',
        component: DetallesProveedorComponent,
      },
      {
        path: 'listar-proveedor',
        component: ListaProveedoresComponent,
      },
      {
        path: 'plantaPorProveedor',
        component: ActualizarProveedorComponent,
      },
      {
        path: '**',
        redirectTo: 'listar-proveedor',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedorRoutingModule { }
