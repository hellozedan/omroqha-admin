import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ParamMap, ActivatedRoute} from "@angular/router";
import {DomainRemoteService} from "./domains-remote-service";


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'domain-info',
  templateUrl: 'domain-info.component.html',
  styleUrls: ['domain-info.component.css'],
})
export class DomainInfoComponent implements OnInit,OnDestroy {
  private domainId: any;
  private sub: any;
  selected_domain=
    {
    }
  ;


  params_id:string='';
  constructor(private remoteService: DomainRemoteService,private router: ActivatedRoute) {
  }




  //Get Domain by ID
  GetDomainById(){
   this.remoteService.getDomainById(this.domainId).then(res => {
      this.selected_domain = res;
      console.log(this.selected_domain);
  });
  }
  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.domainId = params['domainId'];
      console.log(this.domainId);// (+) converts string 'id' to a number
      this.GetDomainById();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  SaveChanges(){
    // need to save last update
    //this.selected_domain.lastUpdated = Date.now();
    //TODO -- to complete this one after integration with the server
    this.remoteService.updateDomain(this.selected_domain);
    //todo NEED TO CHECK THE REULST -- if success or not


  }


  ClearChanges(){
    this.GetDomainById();
  }


}
