import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//prime
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SharedModule } from '../shared/shared.module';
 
const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'parent', component: ParentComponent }
];

@NgModule({
    declarations: [ChildComponent, ParentComponent, DashboardComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        HttpClientModule,
        //FormsModule,
        //ReactiveFormsModule,
        //ToastModule,
        //MessagesModule,
        //MessageModule,
        //PanelModule,
        //DropdownModule,
        //InputTextModule,
        //InputTextareaModule,
        //ButtonModule,
        //TableModule,
        //ProgressSpinnerModule,
        //ScrollPanelModule,
        SharedModule
    ],
    exports: [RouterModule]
})
export class DashboardModule { }
