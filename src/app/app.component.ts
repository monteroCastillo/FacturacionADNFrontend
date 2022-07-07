import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.']
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Home' },
    { url: '/planta', nombre: 'Planta' },
    { url: '/proveedor', nombre: 'Proveedor' },
    { url: '/venta', nombre: 'Venta' }
  ];


}
