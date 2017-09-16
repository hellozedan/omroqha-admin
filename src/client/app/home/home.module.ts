import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [HomeRoutingModule, SharedModule,AgmCoreModule.forRoot({
    apiKey: 'AIzaSyB-ziqpuMMH52jxcevWRuFiRPeuD09gn9U'
  })],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService]
})
export class HomeModule { }
