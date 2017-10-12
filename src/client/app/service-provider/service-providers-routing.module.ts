import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ServiceProviderInfoComponent} from "./service-provider-info.component";
import {NewServiceProviderComponent} from "./new-service-provider.component";
import {ServiceProvidersComponent} from "./service-providers.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'service-providers', component: ServiceProvidersComponent},
      {path: 'service-providers/new', component: NewServiceProviderComponent},
      {path: 'service-providers/:serviceProviderId', component: ServiceProviderInfoComponent}

    ])
  ],
  exports: [RouterModule]
})
export class ServiceProvidersRoutingModule { }
