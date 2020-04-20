import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
 
import { CompareValidator } from './compare.validator';

@Directive({
    selector: '[compareValue]',
    providers: [{ provide: NG_VALIDATORS, useExisting: CompareDirective, multi: true }]
})
export class CompareDirective implements Validator {
    @Input('compareValue') compare: string[] = [];

    validate(formGroup: FormGroup): ValidationErrors {
        return CompareValidator(this.compare[0], this.compare[1])(formGroup);
    }
}