import { IItem } from "./os-iitem";

export interface IItemControl extends IItem {
    toggleState():void;
    setActive():void;
    setInactive():void;
  }
  
