import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Planta } from '../../shared/models/planta';
import { PlantaService } from '../../shared/services/planta.service';

@Component({
  selector: 'app-detalles-planta',
  templateUrl: './detalles-planta.component.html',
  styleUrls: ['./detalles-planta.component.css']
})
export class DetallesPlantaComponent implements OnInit {

  id: number;
  planta: Planta = new Planta();
  constructor(private route: ActivatedRoute, protected plantaServicio: PlantaService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.planta = new Planta();
    if(this.id !== undefined){
      this.plantaServicio.obtenerPlantaPorId(this.id).subscribe(dato => {
        this.planta = dato;
      });
    }
  }

  irAtras() {
    this.router.navigate(['/planta/lista-plantas']);
  }

}
