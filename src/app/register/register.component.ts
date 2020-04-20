import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators'; 
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { AlertService } from '../_services/alert.service';
import { User } from '../_models/user';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    loading = false;
    submitted = false;
    model: any = {};
    constructor(private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
    }

    onSubmit() {
        debugger;
        this.submitted = true;
        let user = new User();
        user.contact = this.model["contact"];
        user.firstName = this.model["firstName"];
        user.lastName = this.model["lastName"];
        user.username = this.model["username"];
        user.email = this.model["email"];
        user.gender = this.model["gender"];
        user.password = this.model["password"];

        this.loading = true;
        this.userService.register(user)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
