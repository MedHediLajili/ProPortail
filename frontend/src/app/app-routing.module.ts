import { OurserviceComponent } from './ourservice/ourservice.component';
import { DoctorsComponent } from './Doctors/doctors/doctors.component';
import { InterfaceComponent } from './FirstPage/interface/interface.component';
import { AssistantComponent } from './assistant/assistant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {APP_BASE_HREF} from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'interface', pathMatch:'full'
  }, 
  {
    path : 'interface',
    component : InterfaceComponent
  }
  , 
  {
    path:'login',
    component: LoginComponent
  },

  {
    path : 'assistant',
    component : AssistantComponent,

  },
  {
    path : 'home',
    component : HomeComponent
  },
  { 
    path : 'doctor',
    component : DoctorsComponent
  },
  {
    path : 'service',
    component : OurserviceComponent
  },
  {
    path : 'contact',
    component : ContactusComponent
  }, 
  {
  path:'register',
  component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]

})
export class AppRoutingModule { }
