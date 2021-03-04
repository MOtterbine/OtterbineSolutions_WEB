import {   Component } from '@angular/core';
import { UIString } from 'src/app/os-common';

@Component({
  selector: 'os-footer',
  templateUrl: './os-footer.component.html',
  styleUrls: ['./footer.less']
})

export class OsFooterComponent {

  copyRightText = UIString.FOOTER_COPYRIGHT.toString() + new Date().getFullYear();

  constructor() {

  }


}

