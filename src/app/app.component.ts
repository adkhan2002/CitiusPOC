import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from './_services/authentication.service';
import { User } from './_models/user';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    NavItems: MenuItem[];

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
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}