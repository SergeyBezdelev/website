import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/modules/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { HomeComponent } from './home/home.component';
import { SystemComponent } from './system.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { WorkComponent } from './work/work.component';
import { EditWorkComponent } from './edit-work/edit-work.component';

@NgModule({
 imports: [ 
    SharedModule,
    CommonModule,
    SystemRoutingModule,
],
 declarations: [ 
    HomeComponent, 
    HeaderComponent, 
    SystemComponent,
    WorkComponent,
    EditWorkComponent, 
],

})
export class SystemModule {}