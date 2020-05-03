import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  properties=[
    {
      title: 'Ma super Maison',
      category:'Maison',
      sold:true
    },
    {
      title: 'Petit appartement',
      category:'appartement',
      sold:true
    },
    {
      title: 'Villa',
      category:'villa s+3',
      sold:false
    },
  ]
  //4: propertiesubject joue le role d'un observer et un emeter
  propertiesSubject = new Subject<any[]>()
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
  createProperty(property){
    this.properties.push(property)
  }
}
