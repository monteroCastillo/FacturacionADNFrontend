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
    { url: '/home', nombre: 'Home' },
    { url: '/planta', nombre: 'Planta' },
    { url: '/listar-proveedor', nombre: 'Proveedor' },
    { url: '/listar-factura', nombre: 'Factura' },
  ];
}
