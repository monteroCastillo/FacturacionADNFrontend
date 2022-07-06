import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { ListaPlantasComponent } from './feature/planta/components/lista-plantas/lista-plantas.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CrearPlantaComponent } from './feature/planta/components/crear-planta/crear-planta.component';
import { FormsModule } from '@angular/forms';
import { ActualizarPlantaComponent } from './feature/planta/components/actualizar-planta/actualizar-planta.component';
import { DetallesPlantaComponent } from './feature/planta/components/detalles-planta/detalles-planta.component';
import { ProveedorComponent } from './feature/proveedor/components/proveedor/proveedor.component';
import { CrearProveedorComponent } from './feature/proveedor/components/crear-proveedor/crear-proveedor.component';
import { ListaProveedoresComponent } from './feature/proveedor/components/lista-proveedores/lista-proveedores.component';
import { DetallesProveedorComponent } from './feature/proveedor/components/detalles-proveedor/detalles-proveedor.component';
import { ActualizarProveedorComponent } from './feature/proveedor/components/actualizar-proveedor/actualizar-proveedor.component';
import { VentaComponent } from './feature/venta/components/venta/venta.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaPlantasComponent,
    NavigationComponent,
    CrearPlantaComponent,
    ActualizarPlantaComponent,

    DetallesPlantaComponent,
    ProveedorComponent,
    ListaProveedoresComponent,
    CrearProveedorComponent,
    DetallesProveedorComponent,
    ActualizarProveedorComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    HttpClientModule,
    FormsModule
      ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
