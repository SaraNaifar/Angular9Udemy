import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monagence';

  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyBcIkcQwTEC9efhaVsTngpqfdFAkxCePPo",
      authDomain: "monagence-7595f.firebaseapp.com",
      databaseURL: "https://monagence-7595f.firebaseio.com",
      projectId: "monagence-7595f",
      storageBucket: "monagence-7595f.appspot.com",
      messagingSenderId: "715784355169",
      appId: "1:715784355169:web:833ab722d58745b73cd920"
    };

    firebase.initializeApp(firebaseConfig);
  }


  

}
