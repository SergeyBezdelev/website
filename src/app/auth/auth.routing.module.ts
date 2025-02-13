import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './Reg/Reg.component';

const routes: Routes = [
    { path: 'auth', component: AuthComponent, children:[
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegComponent },
  ] }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class  AuthRoutingModule { }