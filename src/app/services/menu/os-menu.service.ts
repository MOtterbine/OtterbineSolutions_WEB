import { Injectable } from '@angular/core';
import { UIString } from 'src/app/os-common';
import { Menu } from './os-menu';
import { MENUS } from './os-menus';

@Injectable({
  providedIn: 'root',
})

export class MenuService {

  constructor() { }
  getMenus(): Menu[] {
    return MENUS;

  }
  GetUIJammy = (input:UIString):string =>{

    switch(input) {
      case UIString.PICTURE_TEXT_BUBBLE:
        return UIString.PICTURE_TEXT_BUBBLE.toString();
    }

    return "";
  }
  GetUIString = (input:string):string =>{
    console.log("GetUIString(%s)", input);
    switch(input)
    {
      case "PICTURE_TEXT_BUBBLE":
        return "Hi, I'm Mike!";

        case "WELCOME_GREETING_1":
          return "Welcome to my personal web site!!!";

        case "WELCOME_GREETING_2":
          return "";

        case "WELCOME_GREETING_DETAIL1":
          return "This page was created to help demonstrate the type of code and software projects I have worked on. ";

        case "WELCOME_GREETING_DETAIL2":
          return "Built up over years, libraries of code in various languages are available here. Github links to the source code are available where applicable.";

        case "FOOTER_COPYRIGHT":
          return "Mike Otterbine " + new Date().getFullYear();

        case "BANNER_TITLE_1":
          return "Imagination In Progress...";

        default:
          break;
    }
    return "";
 }



}
