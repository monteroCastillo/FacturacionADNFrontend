import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServicioAlertasService {

  constructor() { }

  mensajeConfirmacion(mensaje: string){
    Swal.fire({title:mensaje, icon:'success',timer:2000});

  }

  mensajeDeError(mensaje: string){
    Swal.fire({title:mensaje, icon:'error',timer:2000});

  }
}
