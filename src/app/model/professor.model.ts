import { University } from "./university.model";

export class Professor {
  idProfessor!: number;
  nom!: string;
  prenom!: string;
  dateEntree!: Date;
  matiere!: string;
  universite!:University;
}
