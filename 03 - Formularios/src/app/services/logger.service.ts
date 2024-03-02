import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { 
    // Aqui se agrega cualquier código que se necesite 
    // Previo a la generacion de una instancia    
  }

  logInfo(message: string){
    console.log(`[INFO] - Se ha ejecutado una accion informativa - [DETALLE] - ${message}`) ;    
  }

  logWarning(message: string){
    console.log(`[WARNING] - Se ha ejecutado una accion preventida - [DETALLE] - ${message}`);
    //console.log("[WARNING] - Se ha ejecutado una accion preventida - [DETALLE] - ", message, "]");
    // console.log("[WARNING] - Se ha ejecutado una accion preventida - [DETALLE] - " + message + "]");
  }

  logError(message: string){
    console.log(`[ERROR] - ¡¡TU APP YA FUÉ!! - [DETALLE] - ${message}`);
  }

}
