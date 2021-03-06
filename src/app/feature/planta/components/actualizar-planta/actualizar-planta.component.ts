
import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Proveedor } from 'src/app/feature/proveedor/shared/models/proveedor';
import { ProveedorService } from 'src/app/feature/proveedor/shared/services/proveedor.service';
import Swal from 'sweetalert2';
import { Planta} from '../../shared/models/planta';
import { PlantaPorProveedor } from '../../shared/models/PlantaPorProveedor';
import { PlantaService } from '../../shared/services/planta.service';

@Component({
  selector: 'app-actualizar-planta',
  templateUrl: './actualizar-planta.component.html',
  styleUrls: ['./actualizar-planta.component.css'],
})
export class ActualizarPlantaComponent implements OnInit {

  plantaForm: FormGroup;
  id: number;
  planta: Planta = new Planta();
  plantaPorProveedor: PlantaPorProveedor = new PlantaPorProveedor();
  listaProveedores: Observable<Proveedor[]>;
  listaPlantas: Observable<Planta[]>;
  public codeValue: string;
  constructor(
    protected proveedorService: ProveedorService,
    protected plantaService: PlantaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.listaProveedores = this.proveedorService.consultar();
    this.listaPlantas = this.plantaService.obtenerListaDePlantas();
    this.id = this.route.snapshot.params.id;
    this.traerPlanta();

  }

  traerPlanta(){
    if(this.id !== undefined){
      this.plantaService.obtenerPlantaPorId(this.id).subscribe({
        next: (dato) => {
          this.planta = dato;
        },
        error: () => {},
      });
    }

  }

  public elegirProveedor(e): void {

    this.plantaPorProveedor={
      idProveedor:  e.target.value,
      idPlanta: this.id
    };
  }

  actualizarPlanta() {
    this.plantaService.actualizarPlanta(this.planta).subscribe(
      () => {  Swal.fire({
        title: 'Registro realizado exitosamente!',
        icon: 'success',
        timer: 2000,
      });
      }
    );
    if(JSON.stringify(this.plantaPorProveedor) !== '{}'){
      this.plantaService.crearPlantaPorProveedor(this.plantaPorProveedor).subscribe(
        () => {  Swal.fire({
          title: 'Registro realizado exitosamente!',
          icon: 'success',
          timer: 2000,
        });
        }
      );
    }
    this.router.navigate(['/planta/lista-plantas']);
  }


}
