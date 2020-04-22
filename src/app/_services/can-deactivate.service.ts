import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class CanDeactivateService {

    // Observable boolean sources
    private requestCanDeactivateSource = new Subject<any>();
    private canDeactivateSource = new Subject<any>();

    // Observable string streams
    requestCanDeactivate$ = this.requestCanDeactivateSource.asObservable();
    canDeactivate$ = this.canDeactivateSource.asObservable();

    // Service message commands
    requestCanDeactivate() {
        this.requestCanDeactivateSource.next(true);
    }
}
