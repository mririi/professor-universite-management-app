import {Injectable} from '@angular/core';
import {Professor} from '../model/professor.model';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {University} from '../model/university.model';
import {UniversityService} from './university.service';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  apiURL: string = 'http://localhost:8080/professors/api';
  professors: Professor[] = [];
  universite: University = new University();
  universities: University[] = [];
  professorsRecherche!: Professor[];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private universityService: UniversityService
  ) {
    this.listeProfessors().subscribe((response) => {
      this.professors = response;
    });

    this.universityService.listeUniversity().subscribe((response) => {
      this.universities = response;
    })
  }

  listeProfessors(): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({Authorization: jwt});
    return this.http.get(this.apiURL + '/all', {headers: httpHeaders});
  }

  ajouterProfessor(prof: Professor): Observable<Professor> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({Authorization: jwt});
    return this.http.post<Professor>(this.apiURL, prof, {
      headers: httpHeaders,
    });
  }

  consulterUniversite(id: number): University {
    this.universite = this.universities.find(uni => uni.idUni === +id) as University;
    console.log(this.universite);
    return this.universite;
  }

  supprimerProfessor(id: number) {
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({Authorization: jwt});
    return this.http.delete(url, {headers: httpHeaders});
  }

  consulterProfessor(id: number): Observable<Professor> {
    const url = `${this.apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({Authorization: jwt});
    return this.http.get<Professor>(url, {headers: httpHeaders});
  }

  updateProfessor(prof: Professor): Observable<Professor> {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({Authorization: jwt});
    return this.http.put<Professor>(this.apiURL, prof, {headers: httpHeaders});
  }

  rechercherParUniversite(idUni: number): Professor[] {
    this.professorsRecherche = [];
    this.professors.forEach((cur, index) => {
      if (idUni == cur.universite.idUni) {
        console.log('cur ' + cur);
        this.professorsRecherche.push(cur);
      }
    });
    return this.professorsRecherche;
  }
}
