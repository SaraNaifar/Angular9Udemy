import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropertiesService } from '../services/properties.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  properties=[]
  propertiesSubscription: Subscription
  constructor(private propertiesServices:PropertiesService) { }
  

  ngOnInit(): void {
    this.propertiesSubscription=this.propertiesServices.propertiesSubject.subscribe(
      (data : any)=>{
        this.properties=data
      }
    )
    this.propertiesServices.getProperties()
      
  }
  getSoldeValue(index){
    if(this.properties[index].sold){
      return 'red'
    }
    return 'green'
  }

  ngOnDestroy(){
    return this.propertiesServices.getProperties()
  }
}
