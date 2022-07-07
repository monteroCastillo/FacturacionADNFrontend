import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Planta } from '../../shared/models/planta';
import { PlantaService } from '../../shared/services/planta.service';

@Component({
  selector: 'app-crear-planta',
  templateUrl: './crear-planta.component.html',
  styleUrls: ['./crear-planta.component.css'],
})
export class CrearPlantaComponent  {
  planta: Planta = new Planta();
  constructor(private plantaServicio: PlantaService, private router: Router) {}



  crearPlanta() {
    this.plantaServicio.crearPlanta(this.planta).subscribe(
      (dato) => {
        console.log(dato);
      },
      (error) => console.log(error)
    );
  }

  irALaListaDePlantas() {
    this.router.navigate(['/plantas']);
  }

  onSubmit() {
    this.crearPlanta();
    console.log(this.planta);
  }
}
