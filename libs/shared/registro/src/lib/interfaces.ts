export interface user {
  type:number;
  email:string;
  nome:string;
  cognome:string;
  id:string;
  classe:string|string[];
}
export interface voto{
  alunno:string,
  voto:number
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
    "classe":string
    "docenti":string[],
    "titolo":string
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
