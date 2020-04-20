import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'usphone'
})
export class UsphonePipe implements PipeTransform {

    transform(val) {
        var viewVal = val.toString().trim().replace(/^\+/, '');
        viewVal = viewVal.toString().replace(/[^0-9]/g, '').slice(0, 10);
        var area, number;

        switch (viewVal.length) {
            case 1:
            case 2:
            case 3:
                area = viewVal;
                break;
            default:
                area = viewVal.slice(0, 3);
                number = viewVal.slice(3);
        }
        if (number) {
            if (number.length > 3) {
                number = number.slice(0, 3) + '-' + number.slice(3, 7);
            }
            else {
                number = number;
            }
            return ('(' + area + ')' + number).trim().slice(0, 14);
        }
        else {
            return "(" + area;
        }
    }
}