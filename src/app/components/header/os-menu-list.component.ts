import {   Component, Input } from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style
 } from '@angular/animations';
import {MenuService } from '../../services/menu/os-menu.service';
import { IMenu } from '../../interfaces/os-imenu';

@Component({
  selector: 'os-menu-list',
  template:'',
  // template:`
  //   <ul style="color:#000;">
  //     <li *ngFor="let menu of menus" [@menuState]="menu.state" (mouseenter)="menu.setActive()" (mouseleave)="menu.setInactive()">
  //         <a uiSref="{{menu.uiSref}}" uiSrefActive = "{{menu.uiSrefActive}}" title="{{menu.title}}">
  //           {{menu.displayText}}
  //         </a>
  //     </li>
  //   </ul>
  // `,
  styleUrls: ['./header.less'],
  animations: [
    trigger(
      'menuState',
      [
        state('inactive', style({
          transform: 'scale(.9)'
        })),
        state('active', style({
          fontWeight: "bold",
          transform: 'scale(1)'
        })),
        transition('active => inactive', animate('50ms ease-out')),
        transition('inactive => active', animate('50ms ease-in'))
      ])
  ]

})

export class OsMenuListComponent{


  @Input() menus: IMenu[];

  constructor(private menuService: MenuService){
    //console.log("OsMenuListComponent constructor");
    this.getMenus();

  }
  getMenus(): void {
    this.menus = this.menuService.getMenus();
  }


}

