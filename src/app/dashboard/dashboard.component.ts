import { Component, OnInit } from '@angular/core'; 
import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    users: User[] = [];
    cols: any[];
    data: User[];
    constructor(private userService: UserService) {

        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'firstName', header: 'Fisrt Name' },
            { field: 'lastName', header: 'Last name' },
            { field: 'contact', header: 'Contact' },
            { field: 'gender', header: 'Gender' }
        ];
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    private loadAllUsers() { 
        this.userService.getAll()
            .toPromise()
            .then(val => {
                this.data = val
            })
            .catch(err => {
            });
    }
}