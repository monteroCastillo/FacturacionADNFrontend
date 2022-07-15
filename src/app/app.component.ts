import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.']
})
export class AppComponent {
  title = '';
  public companies: MenuItem[] = [
    { url: '/planta', nombre: 'Planta' },
    { url: '/proveedor', nombre: 'Proveedor' },
    { url: '/listar-factura', nombre: 'Factura Busqueda' },
    { url: '/crear-factura', nombre: 'Factura' },
    { url: '/venta/:fecha', nombre: 'Venta' },
  ];
}
