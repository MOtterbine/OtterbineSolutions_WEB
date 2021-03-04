import { IAdvertisement } from "../../interfaces/iadvertisement";

export class Advertisement implements IAdvertisement {

  // public name:string;
  // public smUrl: string;
  // public lgUrl: string;
    constructor(public name:string, public smUrl: string, public lgUrl: string)  { 
    }


    // toggleState() {
    //   if(this.state === 'active') this.setInactive();
    //   else this.setActive();
    // }
    // setActive = () => {
    //   this.state = 'active';
    // }
    // setInactive = () => {
    //   this.state = 'inactive';
    // }
}

