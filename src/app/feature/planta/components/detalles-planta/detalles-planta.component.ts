import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Planta } from '../../shared/models/planta';
import { PlantaService } from '../../shared/services/planta.service';

@Component({
  selector: 'app-detalles-planta',
  templateUrl: './detalles-planta.component.html',
  styleUrls: ['./detalles-planta.component.css']
})
export class DetallesPlantaComponent implements OnInit {

  id:number;
  planta:Planta;
  constructor(private route:ActivatedRoute, private plantaServicio:PlantaService,private location:Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.planta = new Planta();
    this.plantaServicio.obtenerPlantaPorId(this.id).subscribe(dato => {
      this.planta =dato;
    });
  }

  irAtras(){
    this.location.back;
  }

}
