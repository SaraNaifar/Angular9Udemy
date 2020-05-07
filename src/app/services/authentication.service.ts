import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
//C'est la fonction de SIGNUP
  signUpUser( email: string, password:string){

    return new Promise((resolve,reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email,password).then(
        ()=>{
          console.log('User Added with success');
          resolve();
      }).catch(
        (error)=>{
            reject(error)
        }
      )
  })
}

//C'est la fonction de signIn
signInUser(email:string, password:string){
  return new Promise((resolve, reject)=>{
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      (data)=>{
        resolve(data);
      })
      .catch(
        (error)=>{
          console.error(error);
          
        }
      )
  })
}

signOutUser(){

  firebase.auth().signOut();
}






}