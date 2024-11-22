import { NgModule } from '@angular/core';
import { StartComponent } from './start.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { StartRoutingModule } from './start-routing.module';
import { SharedModule } from '../shared/modules/shared.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
    imports: [ 
        AuthModule,
        StartRoutingModule,
        SharedModule
    ],
    declarations: [ 
    InitialPageComponent,   
    StartComponent, 
    ],
    
})
export class StartModule { }