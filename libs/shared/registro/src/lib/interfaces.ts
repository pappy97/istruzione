export interface user {
  tipo:number;
  email:string;
  nome:string;
  cognome:string;
  id:string;
  classe?:string;
  cf:string;
  matricola?:string;
  telefono?:string;
  indirizzo?:string;
  dataNascita?:Date;
  annoScolastico?:string;
  luogoNascita?: string;
  materie?: Materia[];
}

export interface Materia{
  classe: string,
  corso:string
}

export interface Assegnazione {
  classe: string;
  materia: string;
  id: string;
  docente: string;
}

export interface voto{
  alunno:string,
  voto:number
}

export interface classe {
  anno: string;
  coordinatoreId:string
  id: string;
  numeroStudenti: number;
  sezione: string;
  nome: string;
}

export interface verifica{
  type:number,
  id:string,
  data:string,
  professore:string,
  classe:string,
  voti:voto[],
  corso:string,
}

export interface corso{

    "id":string,
    "nome":string
    "descrizione":string
}
export interface lezione{
  "id":string,
  "docente":string,
  "data":string,
  "corso":string,
  "classe":string,
  "descrizione":string
}
export interface compito{
  "id":string,
  "classe":string,
  "corso":string,
  "data":string,
  "description":string,
  "professore":string,
}
export interface pagella{
  "alunno":string,
  "classe":string,
  "corso":string,
  "id":string,
  "isconfirmed":boolean,
  "professore":string,
  "voto":number,
}
