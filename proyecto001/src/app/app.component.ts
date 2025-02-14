import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto001';
  nombre='pedro';
  edad=21;
  fumador=true;
  sueldos=[1200,1500,1700];

  provincias = [
    {id:1, nombre:'Madrid'},
    {id:2, nombre:'Barcelona'},
    {id:3, nombre:'Sevilla'},
    {id:4, nombre:'Valencia'}
  ];

  esFumador(){
    return this.fumador?"Es fumador":"No es fumador";
  }

  diHola(){
    return alert("Hola");
  }
  contador = 0;

  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }
}
