import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorsComponent } from './professors/professors.component';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UpdateProfessorComponent } from './update-professor/update-professor.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { UniversityComponent } from './university/university.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';
import { RechercheParUniversityComponent } from './recherche-par-university/recherche-par-university.component';
import {RegisterComponent} from "./register/register.component";
@NgModule({
  declarations: [
    AppComponent,
    ProfessorsComponent,
    AddProfessorComponent,
    UpdateProfessorComponent,
    LoginComponent,
    ForbiddenComponent,
    AddUniversityComponent,
    UpdateUniversityComponent,
    UniversityComponent,
    RechercheParUniversityComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    RouterModule,
    HttpClientModule,
   ReactiveFormsModule,
   Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
