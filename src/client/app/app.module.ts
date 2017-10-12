import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ArticlesModule } from './articles/articles.module';
import { SharedModule } from './shared/shared.module';
import {DomainsModule} from "./domains/domains.module";
import {ServiceProvidersModule} from "./service-provider/service-provider.module";
import {UsersModule} from "./users/users.module";


@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, HomeModule, SharedModule.forRoot(),ArticlesModule,DomainsModule,ServiceProvidersModule,UsersModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule {

}
