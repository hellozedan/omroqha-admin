import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ParamMap, ActivatedRoute, Router} from "@angular/router";
import {DomainRemoteService} from "./domains-remote-service";


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'new-domain',
  templateUrl: 'new-domain.component.html',
  styleUrls: ['new-domain.component.css'],
})
export class NewDomainComponent implements OnInit {


  new_domain= {}
  ;



  constructor(private remoteService: DomainRemoteService,private router: Router) {
  }





  ngOnInit() {
    this.ClearChanges();
  }

  //newID='';
  createDomain(){

    this.new_domain.createdAt = Date.now();
//    this.new_domain.lastUpdated = Date.now();
    this.remoteService.createDomain(this.new_domain);
    //todo NEED TO CHECK THE REULST -- if success or not
    //if succeess go to aricle-info / id

    //this.newID='59c53fa0380f38338818bb4b';
    //this.router.navigate(['domains',this.newID]);

  }

  ClearChanges(){
    this.new_domain= {
      domainName:'',
      active:true,
      level:0,
      domainLogo:'',
      isParent:false,
      domainId:''
    }
  }

}
