import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SystemModule } from './system/system.module';
import { StartModule } from './start/start.module';
import { WorkService } from './shared/services/work.service';

@NgModule({
 imports: [ 
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SystemModule,
    StartModule,
],
 declarations: [ 
    AppComponent,
],
 bootstrap: [ 
    AppComponent 
],
providers:[ 
    WorkService,
    UserService,
    AuthService,
]
})
export class AppModule { }

