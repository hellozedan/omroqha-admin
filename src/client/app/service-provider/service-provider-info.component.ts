import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ParamMap, ActivatedRoute} from "@angular/router";
import {ServiceProvidersRemoteService} from "./service-provider-remote-service";


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'service-provider-info',
  templateUrl: 'service-provider-info.component.html',
  styleUrls: ['service-provider-info.component.css'],
})
export class ServiceProviderInfoComponent implements OnInit,OnDestroy {
  private serviceProviderId: any;
  private sub: any;
  selected_serviceProvider=
    {
    }
  ;


  params_id:string='';
  constructor(private remoteService: ServiceProvidersRemoteService,private router: ActivatedRoute) {
  }




  //Get serviceProvider by ID
  GetServiceProviderById(){
   this.remoteService.getServiceProvidersById(this.serviceProviderId).then(res => {
      this.selected_serviceProvider = res;
  });

  }
  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.serviceProviderId = params['serviceProviderId']; // (+) converts string 'id' to a number
      this.GetServiceProviderById();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  SaveChanges(){
    // need to save last update
//    this.selected_serviceProvider.lastUpdated = Date.now();
    //TODO -- to complete this one after integration with the server
    this.remoteService.updateServiceProviders(this.selected_serviceProvider);
    //todo NEED TO CHECK THE REULST -- if success or not


  }


  ClearChanges(){
    this.GetServiceProviderById();
  }


}
