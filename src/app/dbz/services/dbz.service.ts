import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
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

    get personajes(): Personaje[] {
        // return this._personajes; // Precaución!!! JS envía todo por referencia, para evitar esto se usa operador spread (...)
        return [...this._personajes]; // Separa cada uno de los elementos que tiene _personajes y crea uno nuevo
    }

    constructor() {}

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push(personaje);
    }

}