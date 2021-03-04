import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, SecurityContext, ViewChild, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { extend } from 'jquery';
import { CodeDisplayDirective } from 'src/app/directives/code-display.directive';
import { AWSAuthSignatureComponent } from '../awsauth-signature/awsauth-signature.component';
import { HashingExampleComponent } from '../hashing-example/hashing-example.component';
import { BasePageComponent } from '../os-basepage.component';

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.css']
})


export class CodeDisplayComponent extends BasePageComponent implements OnInit, AfterViewInit {

  title:String = "Code Display";
  htmlFragment:string = "";


  @ViewChild(CodeDisplayDirective) CodeDisplayHost: CodeDisplayDirective;


  constructor(private router:Router, private route:ActivatedRoute, private sanitizer: DomSanitizer, private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    let componentFactory = null;
    let viewContainerRef:ViewContainerRef = null;
    let componentRef = null;


    this.route.paramMap.subscribe((params: ParamMap)=>{
      let param_id = params.get('id');
      if(param_id){

     //   console.log("param: ID (in)", param_id);
        switch(param_id) {
          case 'AwsAuthSignatureExample': // aws iam auth page
            // Load the html fragment
            componentFactory = this.componentFactoryResolver.resolveComponentFactory(AWSAuthSignatureComponent);
            viewContainerRef = this.CodeDisplayHost.viewContainerRef;
            viewContainerRef.clear();
            componentRef = viewContainerRef.createComponent<AWSAuthSignatureComponent>(componentFactory);
            componentRef.instance.ExampleProperty = "Specific to this page...";
            break;
          case 'HashingExample':
            // Load the html fragment
            componentFactory = this.componentFactoryResolver.resolveComponentFactory(HashingExampleComponent);
            viewContainerRef = this.CodeDisplayHost.viewContainerRef;
            viewContainerRef.clear();
            componentRef = viewContainerRef.createComponent<HashingExampleComponent>(componentFactory);
            break;
          case 'D6B8EC4B-B590-42A9-801F-F38B113C5F60':
            break;
          case '7772E1EC-6DD1-4569-AFD5-DD8BDFF5EA93':
            break;
          case '46CB425F-ECF9-47C4-8AA0-4A5F133832F1':
            break;
          case 'F124FB6D-2DED-41F1-82ED-7B5EF2DF73FE':
            break;
            default:
              this.router.navigate(['/NotFound']);
              break;
          }
        }
    });


    // console.log("ngInit");
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
}
