import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup
  constructor(private formBuilder: FormBuilder, private authenticationService : AuthenticationService, private router : Router) { }

  ngOnInit(): void {
   this.signinForm=  this.formBuilder.group({
      email:['', Validators.required],
      password:['', [Validators.required ,  Validators.minLength(6)] ]
    })
  }

  //fonction de validation de signUp 
  /*onSubmitSigninForm(){
    let email= this.signinForm.get('email').value
    let password= this.signinForm.get('password').value
    this.authenticationService.signUpUser(email, password).then(
      ()=>{
        console.log('OKEEEEYYY')
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
  }*/

  //fonction de validation de signIn
  onSubmitSigninForm(){
    let email = this.signinForm.get('email').value
    let password= this.signinForm.get('password').value
    this.authenticationService.signInUser(email, password).then(
      (data)=>{
        //redirect au page d'administration apres la connexion d'administrateur
       this.router.navigate(['/admin', 'dashboard']) // cet URL est traité en tq /admin/dashboard
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
  }


}
