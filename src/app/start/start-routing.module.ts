import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { StartComponent } from './start.component';


const routes: Routes =[
   {path: 'start', component: StartComponent, children:[
    {path: 'initial-page', component: InitialPageComponent},
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class StartRoutingModule { }
