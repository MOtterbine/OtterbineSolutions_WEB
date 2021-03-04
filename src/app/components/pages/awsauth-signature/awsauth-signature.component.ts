import { JSDocCommentStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-awsauth-signature',
  templateUrl: './awsauth-signature.component.html',
  styleUrls: ['./awsauth-signature.component.less']
})
export class AWSAuthSignatureComponent implements OnInit {

  ExampleProperty = "None";

  constructor() { }

  ngOnInit() {
    $(document).prop("title", "Otterbine Solutions | Mike Otterbine | AWS IAM Authorization 4 Example");
    //Jam.JSTest();

  }

  CopyHeader() {
   // let copyTextElement = document.getElementById("scripts-text");
   // copyTextElement.select;





  }

}
