import { IItem } from "../../interfaces/os-iitem";

export class ListItem implements IItem {
  uiSrefActive: string = "active";
  constructor(public displayText:string, public uiSref: string, public title: string = displayText, public state = 'inactive')  { 
  }


  toggleState() {
  //  console.log("toggleState()");
    if(this.state === 'active') this.setInactive();
    else this.setActive();
  }
  setActive = () => {
    this.state = 'active';
  }
  setInactive = () => {
    this.state = 'inactive';
  }
}

