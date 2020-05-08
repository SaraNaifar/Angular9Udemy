import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate() : Promise<boolean> | Observable<boolean> | boolean{
    return new Promise((resolve, reject)=>{
      firebase.auth().onAuthStateChanged(
        (userSession)=>{
          if(userSession){
            resolve(true);
          }else{
            this.router.navigate['/home']
            reject(false)
          }
        }
      )
    })
  }
}
