import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  //variable para guardar y recuperar los compañeros del localStorage
  private storageKey = 'partners';

  //constructor
  contructor(){
    //verifica si hay compañeros guardados en el localStorage. Si los encuentra, los carga en la propiedad 'partners'
    if (this.isLocalStorageAvailable()){
      const savedPartner = localStorage.getItem(this.storageKey);
      if (savedPartner) {
        this.partners = JSON.parse(savedPartner);
      }
    }
  }

  partners = [
    {name: 'Carlos', gender: 'H'},
    {name: 'Oscar', gender: 'H'}
  ];

  getPartner(){
    return this.partners;
  }

  addPartner(partner: {name: string, gender: string}){
    this.partners.push(partner);
    // Guarda el vector actualizado en localStorage
    this.saveToLocalStorage();
  }
  
  deletePartner(index: number){
    this.partners.splice(index,1);
    // Guarda el vector actualizado en localStorage
    this.saveToLocalStorage();
  }

  // Método para guardar la lista de compañeros en localStorage como un string JSON.
  private saveToLocalStorage() {
  localStorage.setItem(this.storageKey, JSON.stringify(this.partners)); // Convierte el arreglo a JSON y lo guarda
  }

  // Método que verifica si localStorage está disponible en el entorno actual
  private isLocalStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    }
    catch (e) {
      return false;
    }
  }
}