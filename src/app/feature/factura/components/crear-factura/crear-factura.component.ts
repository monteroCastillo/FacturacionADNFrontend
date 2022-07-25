import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from 'src/app/feature/planta/shared/models/planta';
import { PlantaService } from 'src/app/feature/planta/shared/services/planta.service';
import Swal from 'sweetalert2';
import { Factura } from '../../shared/model/factura';
import { FacturaCrear } from '../../shared/model/factura-crear';
import { FacturaService } from '../../shared/service/factura.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  factura: Factura = new Factura();
  facturaCrear: FacturaCrear = new FacturaCrear();
  listaPlantas: Observable<Planta[]>;
  public codeValue: string;
  plantaLista: Planta[];
  plantasVendidas: Planta = new Planta();
  plantasVendidasArray: Planta[] = [];

  constructor(protected facturaServicio: FacturaService, protected plantaService: PlantaService) { }

  ngOnInit(): void {
    this.listaPlantas = this.plantaService.obtenerListaDePlantas();
    this.listaPlantas.subscribe(planta =>{

      this.plantaLista = planta;

    });
  }

  crearFactura(){
    this.facturaCrear.comandoProductosFacturar= this.plantasVendidasArray;
    this.facturaServicio.crearFactura(this.facturaCrear).subscribe(
      ()=> { Swal.fire({
        title: 'Registro realizado exitosamente!',
        icon: 'success',
        timer: 2000,
      });
      });
  }

  public saveCode(evento): void {

    // eslint-disable-next-line @typescript-eslint/prefer-for-of, no-var
    for(var i = 0; i< this.plantaLista.length; i++){
      if(this.plantaLista[i].nombre === evento.target.value){
        this.plantasVendidas =(this.plantaLista[i]);
        this.plantasVendidasArray.push(this.plantasVendidas);
        break;
      }
    }

  }


}
