import {Component, OnInit} from '@angular/core';
import {Professor} from '../model/professor.model';
import {AuthService} from '../services/auth.service';
import {ProfessorService} from '../services/professor.service';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
})

export class ProfessorsComponent implements OnInit {
  professors: any = [];
  searchText: any;

  constructor(private professorService: ProfessorService,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    this.professorService.listeProfessors().subscribe((prof) => {
      this.professors = prof;
    })
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
