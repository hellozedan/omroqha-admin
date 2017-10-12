import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DomainsComponent} from "./domains.component";
import {NewDomainComponent} from "./new-domain.component";
import {DomainInfoComponent} from "./domain-info.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'domains', component: DomainsComponent},
      {path: 'domains/new', component: NewDomainComponent},
      {path: 'domains/:domainId', component: DomainInfoComponent}

    ])
  ],
  exports: [RouterModule]
})
export class DomainsRoutingModule { }
