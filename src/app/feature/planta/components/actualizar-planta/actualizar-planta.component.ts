//import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planta } from '../../shared/models/planta';
import { PlantaService } from '../../shared/services/planta.service';



@Component({
  selector: 'app-actualizar-planta',
  templateUrl: './actualizar-planta.component.html',
  styleUrls: ['./actualizar-planta.component.css']
})
export class ActualizarPlantaComponent implements OnInit {

  id:number
  planta:Planta = new Planta();
  constructor(private plantaService:PlantaService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.plantaService.obtenerPlantaPorId(this.id).subscribe(dato =>{
      this.planta = dato;
    }, error => console.log(error));
  }

  irAlaListaDePlantas(){
    this.router.navigate(['/plantas']);
    //swal('Planta actualizada',`La  planta ${this.planta.nombre} ha sido actualizada con exito`,`success`);
  }

   onSubmit(){
    this.plantaService.actualizarPlanta(this.planta).subscribe(() => {
      this.irAlaListaDePlantas();
     // this.plantaService.crearPlanta(this.planta);
    },error => console.log(error));
  }

}
