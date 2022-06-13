import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VitarricoService {

  constructor() { }

  @Output() clientPathTrigger: EventEmitter<any> = new EventEmitter();
  @Output() adminPathTrigger: EventEmitter<any> = new EventEmitter();

  set(key: string, data: any ){
    try{
      localStorage.setItem(key, JSON.stringify(data))
    } catch(e){
      console.log(e);
    }
  }

  get(key: string){
    const user = localStorage.getItem(key);
    try{ 
      if (user !== null){
        return JSON.parse(user);
      }
    } catch(e){
      console.log(e);
    }
  }
}