import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {DataTableModule} from 'angular-4-data-table';
import {RouterModule, Routes} from "@angular/router";
import {UsersRoutingModule} from "./users-routing.module";
import {UsersComponent} from "./users.component";
import {UserInfoComponent} from "./user-info.component";
import {NewUserComponent} from "./new-user.component";
import {UsersRemoteService} from "./users-remote-service";


const appRoutes: Routes = [
  { path: 'users/:id',      component: UserInfoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),UsersRoutingModule, SharedModule, AgmCoreModule.forRoot({
    apiKey: 'AIzaSyB-ziqpuMMH52jxcevWRuFiRPeuD09gn9U'
  }), FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), DataTableModule],
  declarations: [UsersComponent,UserInfoComponent,NewUserComponent],
  exports: [UsersComponent,UserInfoComponent,NewUserComponent],
  providers: [UsersRemoteService]
})
export class UsersModule {
}
