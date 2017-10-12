import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ParamMap, ActivatedRoute, Router} from "@angular/router";
import {ServiceProvidersRemoteService} from "./service-provider-remote-service";


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'new-service-provider',
  templateUrl: 'new-service-provider.component.html',
  styleUrls: ['new-service-provider.component.css'],
})
export class NewServiceProviderComponent implements OnInit {


  new_service_provider= {}
  ;



  constructor(private remoteService: ServiceProvidersRemoteService,private router: Router) {
  }





  ngOnInit() {
    this.ClearChanges();
  }

  //newID='';
  createItem(){

    this.new_service_provider.createdAt = Date.now();
    //this.new_service_provider.lastUpdated = Date.now();
    this.remoteService.createServiceProviders(this.new_service_provider);
    //todo NEED TO CHECK THE REULST -- if success or not
    //if succeess go to -info / id

    //this.newID='59c53fa0380f38338818bb4b';
    //this.router.navigate(['service-providers',this.newID]);

  }

  ClearChanges(){
    this.new_service_provider= {
      serviceProviderId:'',
      serviceProviderName:'',
      address:'',
      serviceProviderDesc:'',
      serviceProviderImagesUrl:[],

      domainId:'',
      active:false,
      primary:false,
    }
  }

}
