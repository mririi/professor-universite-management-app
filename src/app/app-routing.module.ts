import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorsComponent } from './professors/professors.component';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { UpdateProfessorComponent } from './update-professor/update-professor.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProfessorGuard } from './professor.guard';
import { LoginComponent } from './login/login.component';
import { UniversityComponent } from './university/university.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { UniversityGuard } from './university.guard';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { RechercheParUniversityComponent } from './recherche-par-university/recherche-par-university.component';
import {RegisterComponent} from "./register/register.component";
const routes: Routes = [
  { path: "professors", component: ProfessorsComponent },
  { path: "add-professor", component: AddProfessorComponent, canActivate: [ProfessorGuard] },
  { path: "universities", component: UniversityComponent },
  { path: "add-university", component: AddUniversityComponent, canActivate: [UniversityGuard] },
  { path: 'login', component: LoginComponent },
  { path: "register", component: RegisterComponent},
  { path: "rechercheParUniversity", component: RechercheParUniversityComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: "", redirectTo: "professors", pathMatch: "full" },
  { path: "updateProfessor/:id", component: UpdateProfessorComponent, canActivate: [ProfessorGuard] },
  { path: "updateUniversity/:id", component: UpdateUniversityComponent, canActivate: [UniversityGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
