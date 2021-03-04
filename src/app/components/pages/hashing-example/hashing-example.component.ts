import { AfterViewInit, Component, OnInit } from '@angular/core';
    import { Jam } from '../../../custom-js/custom';
import { BasePageComponent } from '../os-basepage.component';
declare var CryptoJS:any;
const SHA_256_STRING:string = "SHA256";
const SHA_512_STRING:string = "SHA512";


@Component({
  selector: 'app-hashing-example',
  templateUrl: './hashing-example.component.html',
  styleUrls: ['./hashing-example.component.less']
})

export class HashingExampleComponent extends BasePageComponent implements OnInit, AfterViewInit {

  useKey:boolean = false;
  textToEncode:string = "";
  keyToEncode:string = "";
  encodedText:string = "";
  encodeTypes = [ {id:0, name:SHA_256_STRING, title:"Apply sha256 hashing to text"},
                 {id:1, name:SHA_512_STRING, title:"Apply sha512 hashing to text" }];
  //encodeTypes = [ "SHA256", "SHA512" ];
  selectedEncodeType:string = SHA_256_STRING;
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    $(document).prop("title", "Otterbine Solutions | Mike Otterbine | Hashing Technology Example")
  }
  ngAfterViewInit() {


  }

  Encode = () => {
    this.encodedText = "";
   // console.log("Encode:", this.selectedEncodeType);
    switch(this.selectedEncodeType) {
      case SHA_256_STRING:
        if(this.useKey) {
          this.encodedText = CryptoJS.HmacSHA256(this.textToEncode, this.keyToEncode);
        } else {
          this.encodedText = CryptoJS.SHA256(this.textToEncode);
        }
        break;
      case SHA_512_STRING:
        if(this.useKey) {
          this.encodedText = CryptoJS.HmacSHA512(this.textToEncode, this.keyToEncode);
        } else {
          this.encodedText = CryptoJS.SHA512(this.textToEncode);//, this.keyToEncode);
        }
        break;
      default:
        break;
    }
    console.log("encodedText", this.encodedText.toString(),"key:",this.keyToEncode, "input", this.textToEncode);
  }



  onChangeUseKey(e) {
  //  console.log("onChangeAlgorithm:", this.useKey);

  }
  onChangeAlgorithm(e) {
   // console.log("onChangeAlgorithm:", this.selectedEncodeType);
  //  console.log("onChangeAlgorithm:", e.target.value);
  //  this.selectedEncodeType = e.target.value;
  }

  Clear() {
    this.encodedText = "";
    this.textToEncode = "";
  }

  EncodeSHA256 = () => {

    this.encodedText = CryptoJS.SHA256(this.textToEncode);

  }

}
