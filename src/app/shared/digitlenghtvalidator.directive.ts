import { Directive, ElementRef, HostListener } from '@angular/core';
import { SelectableRowDblClick } from 'primeng/table/table';

@Directive({
  selector: '[appDigitlenghtvalidator]'
})
export class DigitlenghtvalidatorDirective {

    constructor(private eleRef: ElementRef) {
        debugger;
    }
    @HostListener('keyup', ['$event'])
    onKeyUp(event: KeyboardEvent, eleRef: ElementRef) {
        debugger;
        if (event.srcElement["value"].length > 10) {
            event.srcElement["style"].borderColor = 'red';
             
        }
        else {
            event.srcElement["style"].borderColor = '';
        }
    }


}