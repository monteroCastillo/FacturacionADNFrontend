
import { Planta } from "src/app/feature/planta/shared/models/planta";

export class Factura {

  idCliente: number;
  planta: Planta;
  fechaIngreso: Date;
  valorTotal?: number;
  estado?: string;
  fechaDomicilio?: Date;
  productos?: Productos;
  cliente?: Cliente;

}

export class Productos {
  id: number;
  cantidad: number;
  planta: Planta;
}

export class Cliente{
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
}
