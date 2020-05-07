import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   isLoggedIn: boolean =false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    //fonction pour identifier si utilisateur est deconnecté ou non
    firebase.auth().onAuthStateChanged(
      (userSession)=>{  
        console.log(userSession);
        if(userSession){
          this.isLoggedIn=true;
          console.log('CONNECTéééé')
        }else{
          this.isLoggedIn=false;
          console.log('deconnecté!')
        }
      }
    )
  }
  
  //fonction de déconnexion
  onSignOut(){
    this.authenticationService.signOutUser();
    this.router.navigate(['/login']);
  }

}
