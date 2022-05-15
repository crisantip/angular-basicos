import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 700
    },
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  /*
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }*/

  agregarNuevoPersonaje( nuevoPersonaje: Personaje ) {
    // debugger;
    this.personajes.push( nuevoPersonaje );
    console.log(this.personajes);
  }
}
