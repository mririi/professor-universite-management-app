import {ProfessorService} from '../services/professor.service';
import {Component, OnInit} from '@angular/core';
import {Professor} from '../model/professor.model';
import {University} from '../model/university.model';
import {UniversityService} from '../services/university.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-university',
  templateUrl: './recherche-par-university.component.html',
  styles: []
})
export class RechercheParUniversityComponent implements OnInit {
  professors!: Professor[];
  universities!: University[];
  idUni!: number;
  universityList: any = [];

  constructor(private professorService: ProfessorService,
              private universityService: UniversityService,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    this.professorService.listeProfessors().subscribe(res => {
      this.professors = res;
    });
    this.universityService.listeUniversity().subscribe(response => {
      console.log(response)
      this.universityList = response;
    });
  }

  onChange() {
    this.professors = this.professorService.rechercherParUniversite(this.idUni)
    console.log(this.professors)
  }

  supprimerProfessor(e: Professor) {

    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.professorService.supprimerProfessor(e.idProfessor).subscribe(() => {
        this.SuprimerProfessorDuTableau(e);
      });
  }


  SuprimerProfessorDuTableau(prof: Professor) {
    this.professors.forEach((cur: { idProfessor: number; }, index: any) => {
      if (prof.idProfessor === cur.idProfessor) {
        this.professors.splice(index, 1);
      }
    });
  }
}
