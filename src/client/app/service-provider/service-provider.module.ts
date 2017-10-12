import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {DataTableModule} from 'angular-4-data-table';
import {RouterModule, Routes} from "@angular/router";
import {ServiceProvidersRemoteService} from "./service-provider-remote-service";
import {ServiceProvidersRoutingModule} from "./service-providers-routing.module";
import {ServiceProvidersComponent} from "./service-providers.component";
import {NewServiceProviderComponent} from "./new-service-provider.component";
import {ServiceProviderInfoComponent} from "./service-provider-info.component";


const appRoutes: Routes = [
  { path: 'service-providers/:id',      component: ServiceProviderInfoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),ServiceProvidersRoutingModule, SharedModule, AgmCoreModule.forRoot({
    apiKey: 'AIzaSyB-ziqpuMMH52jxcevWRuFiRPeuD09gn9U'
  }), FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), DataTableModule],
  declarations: [ServiceProvidersComponent,ServiceProviderInfoComponent,NewServiceProviderComponent],
  exports: [ServiceProvidersComponent,ServiceProviderInfoComponent,NewServiceProviderComponent],
  providers: [ServiceProvidersRemoteService]
})
export class ServiceProvidersModule {
}
