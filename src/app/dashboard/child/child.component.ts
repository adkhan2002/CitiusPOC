import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { first } from 'rxjs/operators';



@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input() selected: User;
    @Output() valueUpdate = new EventEmitter();
    userform: FormGroup;
    genders: SelectItem[];
    description: string;
    loading = false;
    update = false;
    title = "Add new user";
    constructor(private fb: FormBuilder, private messageService: MessageService, private userService: UserService) { }
    ngOnInit() {
        this.generateForm(this.selected);
        this.genders = [];
        this.genders.push({ label: 'Select Gender', value: '' });
        this.genders.push({ label: 'Male', value: 'Male' });
        this.genders.push({ label: 'Female', value: 'Female' });

    }
    updateValue(val) {
        debugger;
        this.valueUpdate.emit(this.selected);
    }
    ngOnChanges() {
        if (this.selected != undefined && this.selected != null && this.selected.id > 0) {
            this.update = true;
            this.title = "Update user";
        }
        this.generateForm(this.selected);
    }

    onSubmit(value: string) {
        debugger;
        if (this.userform.invalid) {
            return;
        }
        debugger;
        this.loading = true;

        const controls = this.userform.controls;
        let user = new User();
        user.firstName = controls["firstname"].value;
        user.lastName = controls["lastname"].value;
        user.username = controls["username"].value;
        user.contact = controls["contact"].value;
        user.description = controls["description"].value;
        user.gender = controls["gender"].value;

        if (this.update) {
            user.id= this.selected.id;
            this.userService.update(user)
                .pipe(first())
                .subscribe(
                    data => {
                        this.loading = false;
                        this.generateForm();
                        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Updated successfully' });

                    },
                    error => {
                        debugger;
                        this.messageService.add({ severity: 'error', summary: 'Failed', detail: error });

                        this.loading = false;
                    });
        }
        else {
            this.userService.register(user)
                .pipe(first())
                .subscribe(
                    data => {
                        this.loading = false;
                        this.generateForm();
                        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Record added successfully' });

                    },
                    error => {
                        debugger;
                        this.messageService.add({ severity: 'error', summary: 'Failed', detail: error });

                        this.loading = false;
                    });
        }

        this.update = false;
        this.selected = null;
        debugger;
        this.valueUpdate.emit(this.userService.getAll());
    }
    get diagnostic() { return JSON.stringify(this.userform.value); }

    generateForm(user?: User) {
        if (user != null) {
            this.userform = this.fb.group({
                'firstname': new FormControl(user.firstName, Validators.required),
                'lastname': new FormControl(user.lastName, Validators.required),
                'contact': new FormControl(user.contact, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])),
                'description': new FormControl(user.description),
                'gender': new FormControl(user.gender, Validators.required),
                'username': new FormControl(user.username, Validators.required)
            });
        }
        else {
            this.userform = this.fb.group({
                'firstname': new FormControl('', Validators.required),
                'lastname': new FormControl('', Validators.required),
                'contact': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])),
                'description': new FormControl(''),
                'gender': new FormControl('', Validators.required),
                'username': new FormControl('', Validators.required)
            });
        }
    }

    reset() {
        this.selected = null;
        this.update = false;
        this.generateForm();
        this.title = "Add new user";
    }
}  
