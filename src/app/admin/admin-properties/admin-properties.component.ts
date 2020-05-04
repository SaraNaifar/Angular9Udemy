import { Component, OnInit, ɵConsole } from '@angular/core';
import { ReactiveFormsModule, NgForm, FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { PropertiesService } from 'src/app/services/properties.service';
//pour fermer le modal aprés l'ajout des donnés
import * as $ from 'jquery'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  propertiesForm: FormGroup;
  properties: any[];
  indexToDelete;
  editMode=true;
  indexToEdit;

  //on fait l'instantiation de service formBuilder au constructeur
  constructor(private formBuilder: FormBuilder, private propertiesService: PropertiesService) { }

  ngOnInit(){
    this.formInitialisation();
    this.propertiesService.propertiesSubject.subscribe(
      (data)=>{
        this.properties =  data
      })
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

    let newProperty = this.propertiesForm.value
    if(this.editMode){
      this.propertiesService.updateProperty(newProperty, this.indexToEdit)
    }else{
      this.propertiesService.createProperty(newProperty)
    }
    
    //Avec ID de modal 
    $('#propertiesFormModal').modal('hide')
  }
  resetForm(){
    this.editMode=false
    this.propertiesForm.reset();

  }
  onOpenModalForDelete(index){
    $('#deletePropertyModal').modal('show')
    this.indexToDelete=index
  }
  confirmDeleteProperty(){
    //Appel au service deleteProperty
    this.propertiesService.deleteProperty(this.indexToDelete)
    $('#deletePropertyModal').modal('hide')
  }
  //Pour ouvrir Modal de modification
  //fonctionnalité de modification
  onOpenEditModal(property , index){
    $("#propertiesFormModal").modal('show')
    this.indexToEdit=index
    this.propertiesForm.get('title').setValue(property.title)
    this.propertiesForm.get('typebien').setValue(property.typebien)
    this.propertiesForm.get('category').setValue(property.category)
    this.propertiesForm.get('surface').setValue(property.surface)
    this.propertiesForm.get('pieces').setValue(property.pieces)
    this.propertiesForm.get('description').setValue(property.description)
    this.propertiesForm.get('price').setValue(property.price)
    
  }
}
