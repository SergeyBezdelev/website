import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './Reg/Reg.component';
import { AuthRoutingModule } from './auth.routing.module';
import { SharedModule } from '../shared/modules/shared.module';


@NgModule({
 imports: [ 
    SharedModule,
    CommonModule,
    AuthRoutingModule
],
 declarations: [ 
    AuthComponent, 
    LoginComponent, 
    RegComponent 
],

})
export class AuthModule { }