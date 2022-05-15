import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
/*
    Clase que muestra el concepto de one way data binding
    que significa enlazado en una sola vía. Cuando se produce
    un cambio, se refleja en el template (html); los cambios solo
    se aplican a los controles donde están referenciados.
    Cuando no se alteran los valores no se refresca nada en el template,
    a pesar que si se lancen los eventos de JS
*/
export class HeroeComponent {

    nombre: string = 'IronMan';
    edad: number = 45;

    get nombreCapitalizado(): string { // getter, inicia con get
        return this.nombre.toUpperCase();
    }

    construirNombre(): string {
        return `${this.nombre} - ${this.edad}`; // template literal
    }

    cambiarNombre(): void {
        console.log('Hey');
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}