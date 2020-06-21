import { Articlesrvice } from './service/articleservice.service';
import { ChatModule } from './chat/chat.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FheaderComponent } from './FirstPage/fheader/fheader.component';
import { AssistantComponent } from './assistant/assistant.component';
import { ArticlesComponent } from './articles/articles.component';
import { InterfaceComponent } from './FirstPage/interface/interface.component';
import { DoctorsComponent } from './Doctors/doctors/doctors.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { DoctoresService } from './service/doctores.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    FheaderComponent,
    AssistantComponent,
    ArticlesComponent,
    InterfaceComponent,
    DoctorsComponent,
    OurserviceComponent,
    ContactusComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ChatModule,
    HttpClientModule
  ],
  providers: [
    Articlesrvice, 
    DoctoresService, 
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
