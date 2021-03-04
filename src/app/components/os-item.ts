  import {IItem} from "../interfaces/os-iitem";
  
  export class Item implements IItem{
      public title: string;
      public displayText:string;
      public state:string = "inactive";

      constructor( display:string, title:string){
        this.title = title;
        this.displayText = display;
        
      }

      toggleState() {
        // console.log("Item.toggleState()");
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