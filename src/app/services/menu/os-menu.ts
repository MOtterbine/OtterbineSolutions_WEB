import { IMenu } from "../../interfaces/os-imenu";

export class Menu implements IMenu {
  uiSrefActive = 'active';
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

