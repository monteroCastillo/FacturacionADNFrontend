
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from 'src/app/feature/planta/shared/models/planta';
import { PlantaService } from 'src/app/feature/planta/shared/services/planta.service';
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




  constructor(private facturaServicio: FacturaService, private plantaService: PlantaService) { }

  ngOnInit(): void {
    this.listaPlantas = this.plantaService.obtenerListaDePlantas();
    this.listaPlantas.subscribe(planta =>{

      this.plantaLista = planta;

    });
    console.log("Planta Array "+ this.plantasVendidasArray);

  }

  crearFactura(){
    this.facturaServicio.crearFactura(this.facturaCrear).subscribe(
      (dato) => {
        console.log(dato);
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {

    this.facturaCrear.comandoProductosFacturar= this.plantasVendidasArray;
    console.log("comandoProductos " + this.facturaCrear.comandoProductosFacturar);
    console.log("plantasVendidas " +JSON.stringify( this.plantasVendidas));
    this.crearFactura();

    console.log("FACTURA "+ JSON.stringify(this.factura));
  }

  public saveCode(e): void {

    console.log("El valor del evento es: "+ e.target.value);
    console.log("El valor del string es: "+ this.codeValue)

    for(var i = 0; i< this.plantaLista.length; i++){
      if(this.plantaLista[i].nombre == e.target.value){
        this.plantasVendidas =(this.plantaLista[i]);
        this.plantasVendidasArray.push(this.plantasVendidas);
        break;
      }
    }


    console.log("La Planta vendida es: " +JSON.stringify(this.plantasVendidas));

  }


}
