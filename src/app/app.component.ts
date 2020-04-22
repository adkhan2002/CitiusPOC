import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from './_services/authentication.service';
import { User } from './_models/user';
import { Subscription } from 'rxjs';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    NavItems: MenuItem[];
    currentUser: User;
    currentUserSubscription: Subscription;
    constructor(private router: Router, private authenticationService: AuthenticationService) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }



    ngOnInit(): void {
        this.NavItems = [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: 'info' },
            { label: 'Pipe - Directive Demo', icon: 'pi pi-fw pi-calendar', routerLink: '/pipedirective' },
            { label: 'Parent-Child Demo', icon: 'pi pi-fw pi-pencil', routerLink: '/dashboard/parent' },
            {
                label: 'Logout', icon: 'pi pi-fw pi-power-off', command: (event) => {
                    debugger;
                    this.authenticationService.logout();
                    this.router.navigate(['/login']);
                }
            }
        ];
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }


    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }
}