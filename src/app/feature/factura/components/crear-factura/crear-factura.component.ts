import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from 'src/app/feature/planta/shared/models/planta';
import { PlantaService } from 'src/app/feature/planta/shared/services/planta.service';
import { Factura } from '../../shared/model/factura';
import { FacturaCrear } from '../../shared/model/factura-crear';
import { FacturaService } from '../../shared/service/factura.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {
  facturaForm: FormGroup;

  factura: Factura = new Factura();
  facturaCrear: FacturaCrear = new FacturaCrear();
  listaPlantas: Observable<Planta[]>;
  public codeValue: string;
  plantaLista: Planta[];
  plantasVendidas: Planta = new Planta();
  plantasVendidasArray: Planta[] = [];

  constructor(private facturaServicio: FacturaService, private plantaService: PlantaService) { }

  ngOnInit(): void {
    this.construirFormularioFactura();
    this.listaPlantas = this.plantaService.obtenerListaDePlantas();
    this.listaPlantas.subscribe(planta =>{

      this.plantaLista = planta;

    });
  }

  crear() {
    console.log('Valor del facturaForm ' +JSON.stringify(this.facturaForm));
    this.facturaCrear.comandoProductosFacturar= this.plantasVendidasArray;
    this.facturaServicio.crearFactura(this.facturaForm.value).subscribe(
      ()=>window.alert('Registro Creado'));

  }

  public saveCode(e): void {

    // eslint-disable-next-line @typescript-eslint/prefer-for-of, no-var
    for(var i = 0; i< this.plantaLista.length; i++){
      if(this.plantaLista[i].nombre === e.target.value){
        this.plantasVendidas =(this.plantaLista[i]);
        this.plantasVendidasArray.push(this.plantasVendidas);
        break;
      }
    }
    console.log('La Planta vendida es: ' +JSON.stringify(this.plantasVendidas));
  }

  private construirFormularioFactura() {
    this.facturaForm = new FormGroup({
      cliente: new FormControl('', [Validators.required]),
      plantas: new FormControl('', [Validators.required]),
      fechaIngreso:  new FormControl('', [Validators.required])
    });
  }
}
