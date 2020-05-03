import { Component, OnInit, ɵConsole } from '@angular/core';
import { ReactiveFormsModule, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  propertiesForm: FormGroup;
  properties: any[]
  //on fait l'instantiation de service formBuilder au constructeur
  constructor(private formBuilder: FormBuilder, private propertiesService: PropertiesService) { }

  ngOnInit(){
    this.formInitialisation();
    this.propertiesService.propertiesSubject.subscribe(
      (data)=>{
        this.properties =  data
        console.log(this.properties)
      }
    )
    this.propertiesService.getProperties();
  }

  formInitialisation(){
    //Pour la reinitialisation de formulaire apres le chargement de composant en utilisant le service FormBuilder 
    this.propertiesForm= this.formBuilder.group({
      title:['', Validators.required],
      typebien:'',
      category:'',
      surface:'',
      pieces:'',
      description:'',
      price:''
    })
  }
  onSubmitProperties(){
    console.log(this.propertiesForm.value)
    let newProperty = this.propertiesForm.value
    this.propertiesService.createProperty(newProperty)
  }

}
