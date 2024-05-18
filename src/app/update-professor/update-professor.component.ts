import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Professor} from '../model/professor.model';
import {University} from '../model/university.model';
import {ProfessorService} from '../services/professor.service';
import {UniversityService} from '../services/university.service';

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrls: ['./update-professor.component.css'],
})
export class UpdateProfessorComponent implements OnInit {
  currentProfessor = new Professor();
  universityList: University[] = [];
  updatedUniversity!: University;
  idUni!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private professorService: ProfessorService,
    public universityService: UniversityService
  ) {
  }

  ngOnInit(): void {
    this.onSelectUni();
    this.professorService.consulterProfessor(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        (prof) => {
          this.currentProfessor = prof;
          this.updatedUniversity = prof.universite;
          this.idUni = this.currentProfessor.universite.idUni;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateProfessor() {
    this.updatedUniversity = this.professorService.consulterUniversite(this.idUni);
    this.currentProfessor.universite = this.updatedUniversity;
    this.professorService.updateProfessor(this.currentProfessor).subscribe({
      next: () => {
        this.router.navigate(['professors']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onSelectUni() {
    this.universityService.listeUniversity().subscribe((response) => {
      this.universityList = response;
    });
  }
}
