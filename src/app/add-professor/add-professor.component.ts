import {Component, OnInit} from '@angular/core';
import {Professor} from '../model/professor.model';
import {ProfessorService} from '../services/professor.service';
import {Router} from '@angular/router';
import {UniversityService} from '../services/university.service';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.css']
})
export class AddProfessorComponent implements OnInit {
  newProfessor = new Professor();
  universityList: any = [];

  constructor(private professorService: ProfessorService,
              private router: Router,
              private universityService: UniversityService) {
  }

  ngOnInit(): void {
    this.onSelectUni();
  }

  addProfessor() {
    this.professorService.ajouterProfessor(this.newProfessor)
      .subscribe(prof => {
        console.log(prof);
      });
    this.ngOnInit();
    this.router.navigate(['professors']).then(() =>
      window.location.reload());
  }

  onSelectUni() {
    this.universityService.listeUniversity().subscribe(response => {
      this.universityList = response;
    });
  }
}
