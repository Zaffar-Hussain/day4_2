import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players:any[];
  constructor() 
  {
    this.players = [
      {id:100, name:'Ronaldo', gender:'Male', salary:10000000, birthday:'7/2/1986'},
      {id:101, name:'Messi', gender:'Male', salary:1000000, birthday:'8/2/1989'},
      {id:102, name:'Pele', gender:'Male', salary:10000010, birthday:'7/3/1956'},
      {id:103, name:'Maradona', gender:'Male', salary:100000, birthday:'17/12/1963'}
    ];
  }
  trackById(index:number, element:any) {
    return element.id;
  }
  getPlayers():void
  {
    this.players = [
      {id:100, name:'Ronaldo', gender:'Male', salary:10000000, birthday:'7/2/1986'},
      {id:101, name:'Messi', gender:'Male', salary:1000000, birthday:'8/2/1989'},
      {id:102, name:'Pele', gender:'Male', salary:10000010, birthday:'7/3/1956'},
      {id:103, name:'Maradona', gender:'Male', salary:100000, birthday:'17/12/1963'},
      {id:104, name:'Pele', gender:'Male', salary:10000010, birthday:'7/3/1956'},
      {id:105, name:'Maradona', gender:'Male', salary:100000, birthday:'17/12/1963'}
    ];
  }

  ngOnInit(): void {
  }

}
