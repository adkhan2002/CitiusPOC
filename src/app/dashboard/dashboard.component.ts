import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../_models/user'; 
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    cols: any[];
    data$: Observable<User[]>;
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'firstName', header: 'Fisrt Name' },
            { field: 'lastName', header: 'Last name' },
            { field: 'contact', header: 'Contact' },
            { field: 'gender', header: 'Gender' }
        ];
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        debugger;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
            this.data$ = of(users);
        });
    }
}