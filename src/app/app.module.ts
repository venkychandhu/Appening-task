import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule,ReactiveFormsModule}from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyserviceService } from './myservice.service';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { UserpostComponent } from './MyDashboard/userpost/userpost.component';
import { RigistrationFormComponent } from './MyDashboard/rigistration-form/rigistration-form.component';
import { PagenotfountComponent } from './pagenotfount/pagenotfount.component';
import { HomecomponetComponent } from './MyDashboard/homecomponet/homecomponet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyDashboardComponent,
    UserpostComponent,
    RigistrationFormComponent,
    PagenotfountComponent,
    HomecomponetComponent,
  ],
  imports: [
    BrowserModule
    ,ReactiveFormsModule,
    HttpClientModule,FormsModule,
    RouterModule.forRoot([
     {path:"",component:LoginComponent},
     {path:"mydashboard",component:MyDashboardComponent,
     children:[{path:"",component:HomecomponetComponent,},
                {path:"userpost",component:UserpostComponent},
                {path:"rigistrationForm",component:RigistrationFormComponent},
              ]},
    { path:"**",component:PagenotfountComponent}
    ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
