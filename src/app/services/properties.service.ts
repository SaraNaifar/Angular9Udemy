import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Property } from '../interfaces/property';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  properties:Property[];
  //4: propertiesubject joue le role d'un observer et un emeter
  propertiesSubject = new Subject<Property[]>()
  constructor() { }

  getProperties(){
    
    //1: on va utiliser en premier lieu les promises pour avoir code asynchrone
    /*return new Promise(
      (resolve, reject)=>{
        if(this.properties && this.properties.length>0){
          resolve(this.properties)
        }else{
         const error = new Error(' properties does not exist or empty')
         reject(error)
        }

      }
    )*/
      //2: Aulieu d'utiliser Promise on doit utiliser les observables
     /* return new Observable((observer)=>{
        if (this.properties && this.properties.length>0){
          observer.next(this.properties)
          observer.complete()
        }else{
          const error  =new Error('properties is empty or does not exists')
          observer.error(error)
        }
      })*/
      //3: au lieu d'utilser observer on va utiliser Subject de la biblitothéque Rxjs
      this.propertiesSubject.next(this.properties)

  }
  createProperty(property:Property){
    this.properties.push(property)
  }
  deleteProperty(index){
      this.properties.splice(index, 1)
      console.log(index)
      this.getProperties()
  }

  updateProperty(property:Property, index){
    this.properties[index] = property
    console.log('jjjjjjjj')
    this.getProperties()
  }
}
