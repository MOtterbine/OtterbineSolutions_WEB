import { 
    Component
  } from '@angular/core';


  @Component({
    selector: 'error',
    template: `
        <h2>{{errString}}</h2>
    `
  })

  export class ErrorComponent{

    errString: string = "Error";


  }