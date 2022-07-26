import { HttpErrorResponse } from '@angular/common/http';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ServicioAlertasService } from '@core/services/servicio-alertas.service';
import { Planta } from '../../shared/models/planta';
import { PlantaService } from '../../shared/services/planta.service';

@Component({
  selector: 'app-crear-planta',
  templateUrl: './crear-planta.component.html',
  styleUrls: ['./crear-planta.component.css'],
})
export class CrearPlantaComponent {
  planta: Planta = new Planta();
  constructor(protected plantaServicio: PlantaService, private router: Router, protected alertaServicio: ServicioAlertasService) {}

  crearPlanta() {
    this.plantaServicio.crearPlanta(this.planta).subscribe({
      next: () => {
        this.alertaServicio.mensajeConfirmacion('Registro realizado exitosamente!');
      },
      error: (error: HttpErrorResponse) => {
        this.alertaServicio.mensajeDeError(error.error.mensaje);
      },
    });
    this.router.navigate(['/planta/lista-plantas']);
  }

}
