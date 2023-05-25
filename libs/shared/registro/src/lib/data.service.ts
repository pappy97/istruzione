/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{
  createDb() {

    const users=[
      {type:1,email:"aaaatlolo.com",nome:"Antonio",cognome:"Pappalardo",id:"001",classe:"2A"},
      {type:1,email:"",nome:"Raffaele",cognome:"Della Ragione",id:"002",classe:"2A"},
      {type:1,email:"",nome:"Bruno",cognome:"Pepe",id:"003",classe:"3A"},
      {type:1,email:"",nome:"Gaia",cognome:"Paciullo",id:"004",classe:"3A"},
      {type:1,email:"",nome:"Ciro",cognome:"Immobile",id:"005",classe:"4A"},
      {type:2,email:"professoreatmail.com",nome:"Gianna",cognome:"Lambiase",id:"A01",classi:["2A"]},
      {type:2,email:"",nome:"Pina",cognome:"Oliva",id:"A02",classi:["4A"]},
      {type:2,email:"",nome:"Ami",cognome:"Pepe",id:"A03",classi:["3A"]},
      {type:2,email:"",nome:"Mario",cognome:"Rossi",id:"A04",classi:["2A","3A","4A"]},
      {type:2,email:"",nome:"Nino",cognome:"Cerruto",id:"A05",classi:["4A","3A"]},
    ]
    const verifiche=[
      {type:1,id:"0001",data:"25-01-2023",professore:"A01",classe:"2A",voti:[{alunno:"001",voto:4},{alunno:"002",voto:6}],corso:"AA"},
      {type:1,id:"0002",data:"25-02-2023",professore:"A01",classe:"2A",voti:[{alunno:"001",voto:6},{alunno:"002",voto:6}],corso:"AA"},
      {type:1,id:"0003",data:"25-03-2023",professore:"A01",classe:"2A",voti:[{alunno:"001",voto:8},{alunno:"002",voto:6}],corso:"AA"},
      {type:1,id:"0004",data:"25-04-2023",professore:"A01",classe:"2A",voti:[{alunno:"001",voto:10},{alunno:"002",voto:6}],corso:"AA"},
      {type:2,id:"0005",data:"22-04-2023",professore:"A01",classe:"2A",voti:[{alunno:"001",voto:7},{alunno:"002",voto:6}],corso:"AA"},
      {type:2,id:"0006",data:"21-04-2023",professore:"A01",classe:"2A",voti:[{alunno:"001",voto:5},{alunno:"002",voto:6}],corso:"AA"},
      {type:2,id:"0007",data:"20-04-2023",professore:"A01",classe:"2A",voti:[{alunno:"001",voto:6},{alunno:"002",voto:6}],corso:"AA"},
    ]
    const compiti=[
      {id:"0000000001",data:"23/04/2023",professore:"A01",classe:"2A", description:"Assegno Compiti",corso:"AA"},
      {id:"0000000002",data:"20/04/2023",professore:"A01",classe:"1A", description:"Assegno Compiti",corso:"AA"},
      {id:"0000000003",data:"16/04/2023",professore:"A01",classe:"2A", description:"Assegno Compiti",corso:"AA"}
    ]
    const corso=[
      {
        id:"AA",
        docenti:["A01"],
        Titolo:"Informatica"

      }

    ]
    return {"users":users,"verifiche":verifiche}
  }

}
