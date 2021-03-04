import { Injectable, Inject, Optional,Component } from '@angular/core';
import { LISTS } from './os-lists';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ListService {

  // here's where the item is linked up
  private listSource = new BehaviorSubject(LISTS(this.listType));
  currentList = this.listSource.asObservable();

  constructor(@Inject('listType') @Optional() public listType?: string) {

    this.listType  = listType;// || "error";

  }
  changeList(message: string) {
    //console.log("ListService.changeList():" + message);
    this.listSource.next(LISTS(message))
  }





}