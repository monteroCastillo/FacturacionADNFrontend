
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Planta } from 'src/app/feature/planta/shared/models/planta';
import { PlantaService } from 'src/app/feature/planta/shared/services/planta.service';

@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css']
})
export class ListaPlantasComponent implements OnInit {

  planta: Planta[];
  public listaPlantas: Observable<Planta[]>;

  constructor(private plantaServicio: PlantaService, private router: Router) { }

  ngOnInit(): void {
    this.listaPlantas = this.plantaServicio.obtenerListaDePlantas();
    this.obtenerPlanta();
  }

  verDetallesDeLaPlanta(id: number) {
    this.router.navigate(['planta/detalles-planta', id]);
  }

  actualizarPlanta(id: number) {
    this.router.navigate(['planta/actualizar-planta', id]);
  }

  eliminarPlanta(id: number) {
    this.plantaServicio.eliminarPlanta(id).subscribe(dato => {
      console.log(dato);
      this.obtenerPlanta();
    });
  }

  private obtenerPlanta() {
    this.plantaServicio.obtenerListaDePlantas().subscribe(dato => {
      this.planta = dato;
    });
  }
}


