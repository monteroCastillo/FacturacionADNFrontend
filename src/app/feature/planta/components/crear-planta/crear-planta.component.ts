import { HttpErrorResponse } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Planta } from '../../shared/models/planta';
import { PlantaService } from '../../shared/services/planta.service';

@Component({
  selector: 'app-crear-planta',
  templateUrl: './crear-planta.component.html',
  styleUrls: ['./crear-planta.component.css'],
})
export class CrearPlantaComponent {
  planta: Planta = new Planta();
  constructor(private plantaServicio: PlantaService, private router: Router) {}

  crearPlanta() {
    this.plantaServicio.crearPlanta(this.planta).subscribe({
      next: () => {
        Swal.fire({
          title: 'Registro realizado exitosamente!',
          icon: 'success',
          timer: 2000,
        });
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        Swal.fire({
          title: error.error.mensaje,
          icon: 'error',
          timer: 2000,
        });
      },
    });
    this.router.navigate(['/planta/lista-plantas']);
  }

  irALaListaDePlantas() {
    this.router.navigate(['/planta']);
  }

  onSubmit(form: NgForm) {
    this.crearPlanta();
    console.log(this.planta);
    form.resetForm();
  }

  clearForm(form: FormGroup) {
    form.reset();
  }
}
