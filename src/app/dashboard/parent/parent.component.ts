import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SelectItem } from 'primeng/api';
import { User } from '../../_models/user'; 
import { GetLocalJSONServiceService } from '../../_services/get-local-jsonservice.service';


@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css'],
    providers: [GetLocalJSONServiceService],
})
export class ParentComponent implements OnInit {
    num1: string;
    num2: string;
    Total: number;
    selected: {} = null;
    brands: SelectItem[];
    data$: Observable<User[]>;
    constructor(private getlocaljsonserviceservice: GetLocalJSONServiceService ) {

        debugger;
         this.data$ = of(this.getlocaljsonserviceservice.getUsers());
        //this.userService.getAll().subscribe((data: any[]) => {
        //    debugger;
        //    console.log(data);
        //    this.data$ = of(data);
        //})
    }
    ngOnInit() { }

    onRowSelect(data) {
        debugger;
        this.selected = data;
    }



    getUpdatedvalue($event) {

        this.data$ = $event;
        this.selected = null;
    }
}  
