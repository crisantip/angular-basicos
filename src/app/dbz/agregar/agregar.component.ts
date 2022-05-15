import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  
  //@Input() 
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  /*
  agregar( event: SubmitEvent): void {
    // Evita el comportamiento por defecto del evento, 
    // en este caso dado que es un evento de formulario, refresca toda la página
    // desde el código html se le envía el evento así:
    // <form (submit)="agregar( $event )">
    event.preventDefault();
    console.log(event);
  }
  */

   // Otra alternativa para no tener que hacer lo anterior es usar FormsModule
   // se debe cambiar el evento en el html así:  <form (ngSubmit)="agregar()">
  agregar() {
    if(this.nuevo.nombre.trim().length === 0) { return };
    
    console.log( this.nuevo );
    this.onNuevoPersonaje.emit( this.nuevo );
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  
  /*
  // Pasa asignar un valor
    <input 
    ...
      [value]="nuevo.nombre"
      (input)="cambiarNombre($event)"
    />
  cambiarNombre(event: any) {
    console.log(event.target.value);
  }
  // Lo anterior se reemplaza con ngModel
  */

}
