import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../shared/services/auth.guard';
import { WorkComponent } from './work/work.component';
import { EditWorkComponent } from './edit-work/edit-work.component';

const routes: Routes =[
   {path: 'system', component: SystemComponent, canActivate:[AuthGuard], children:[
    {path: 'home', component: HomeComponent},
    {path: 'work', component: WorkComponent},
    {path: 'edit-work', component: EditWorkComponent},
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
