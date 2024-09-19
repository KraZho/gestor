import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  
  listas = [
    {nombre: 'Carlos', genero: 'H'},
    {nombre: 'Oscar', genero: 'H'}
  ];

  generos: string[] = ['H', 'M'];

  addCompanero(lista: {nombre: string, genero: string}){
    this.listas.push(lista);
  }
}