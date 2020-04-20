import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { Subscription, Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsphonePipe } from '../shared/usphone.pipe';
 
@Component({
    selector: 'app-pipedirective',
    templateUrl: './pipe-directive.component.html',
    styleUrls: ['./pipe-directive.component.css']
})
export class PipeDirectiveComponent implements OnInit {
    Number: string = "";

    checkoutForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder, private _el: ElementRef) { 
        this.checkoutForm = this.formBuilder.group({
            phone: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.max(9999999999)])),
        }); 
    }

    ngOnInit(): void {
    }
        
    @HostListener('document:keyup', ['$event'])
    KeyUpEvent(event: KeyboardEvent) {
     
        if (event.srcElement["id"] == "phone") {
            const initalValue = event.srcElement["value"];
            let phonePipe = new UsphonePipe;
            if (initalValue.length > 0) {
                this.Number = phonePipe.transform(initalValue);
            }
            else
                this.Number = ""; 
            
        }
    }

   
}