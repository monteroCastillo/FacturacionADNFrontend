
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planta } from 'src/app/feature/planta/shared/models/planta';
import { PlantaService } from 'src/app/feature/planta/shared/services/planta.service';

@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css']
})
export class ListaPlantasComponent implements OnInit {

  planta:Planta[];

  constructor (private plantaServicio:PlantaService, private router:Router){ }

  ngOnInit(): void {
    this.obtenerPlanta();
  }

  actualizarPlanta(id:number){
    this.router.navigate(['actualizar-planta',id])
  }

  eliminarPlanta(id:number){
    this.plantaServicio.eliminarPlanta(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerPlanta();
    });
  }

  private obtenerPlanta(){
    this.plantaServicio.obtenerListaDePlantas().subscribe(dato =>{
      this.planta = dato;

    });
  }


  verDetallesDeLaPlanta(id:number){
      this.router.navigate(['detalles-planta',id]);
  }


}


