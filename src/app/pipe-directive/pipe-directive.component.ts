import { Component, OnInit,  HostListener, OnDestroy } from '@angular/core';
import { Subscription, Observable, of } from 'rxjs'; 
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsphonePipe } from '../shared/usphone.pipe';
import { CanDeactivateService } from '../_services/can-deactivate.service';
 
@Component({
    selector: 'app-pipedirective',
    templateUrl: './pipe-directive.component.html',
    styleUrls: ['./pipe-directive.component.css'],
    providers: [CanDeactivateService]
})
export class PipeDirectiveComponent implements OnInit, OnDestroy {
    Number: string = ""; 
    checkoutForm: FormGroup; 
    actionsSubscription: Subscription;
    constructor(private formBuilder: FormBuilder, private canDeactivateService: CanDeactivateService) { 
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

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        this.canDeactivateService.requestCanDeactivate(); 
        return of(window.confirm('do u want to leave'));
        
    }

    ngOnDestroy() {
      
    }
}