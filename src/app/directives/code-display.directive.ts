import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[codeDisplayHost]',
})

export class CodeDisplayDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}