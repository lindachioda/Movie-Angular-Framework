import { Directive, ElementRef, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[appHighlight]',
})
export class Highlight implements OnInit { //definisci cosa deve fare la direttiva

  constructor(private element:ElementRef) { //evidenzia di colore giallo
  }

   @Input() appHighlight:string = "yellow"

  ngOnInit():void {
    this.element.nativeElement.style.backgroundColor = this.appHighlight
  }

  //oppure senza @Input:
  //ngOnInit():void {
    //this.element.nativeElement.style.backgroundColor = "yellow"
  //}

}
