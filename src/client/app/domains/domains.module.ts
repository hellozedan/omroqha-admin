import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import {DataTableModule} from 'angular-4-data-table';
import {DomainRemoteService} from './domains-remote-service';
import {RouterModule, Routes} from "@angular/router";
import {DomainsRoutingModule} from "./domains-routing.module";
import {DomainsComponent} from "./domains.component";
import {NewDomainComponent} from "./new-domain.component";
import {DomainInfoComponent} from "./domain-info.component";


const appRoutes: Routes = [
  { path: 'domains/:id',      component: DomainInfoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),DomainsRoutingModule, SharedModule, AgmCoreModule.forRoot({
    apiKey: 'AIzaSyB-ziqpuMMH52jxcevWRuFiRPeuD09gn9U'
  }), DataTableModule],
  declarations: [DomainsComponent,NewDomainComponent,DomainInfoComponent],
  exports: [DomainsComponent,NewDomainComponent,DomainInfoComponent],
  providers: [DomainRemoteService]
})
export class DomainsModule {
}
