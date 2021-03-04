import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
@Component({
  selector: 'app-parent',
  template: `
    Parent:{{message}}
    <button (click)="newMessage1()">Prnt 1</button><button (click)="newMessage2()">Prnt 2</button>
    `,
  styleUrls: ['./pages/pages.less']
})
export class ParentComponent implements OnInit {

  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  newMessage1() {
    this.data.changeMessage("Msg P1")
  }
  newMessage2() {
    this.data.changeMessage("Msg P2")
  }

}