import { NgModule } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-sibling',
  template: `
    Sibling:{{message}}
    <button (click)="newMessage1()">Sblg 1</button><button (click)="newMessage2()">Sblg 2</button>
  `,
  styleUrls: ['./pages/pages.less']
})
export class SiblingComponent implements OnInit {

  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage1() {
    this.data.changeMessage("Msg S1")
  }
  newMessage2() {
    this.data.changeMessage("Msg S2")
  }

}