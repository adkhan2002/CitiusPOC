import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MessageService } from 'primeng/api';
import { UsphonePipe } from './usphone.pipe';
import { DigitlenghtvalidatorDirective } from './digitlenghtvalidator.directive';
import { TabMenuModule } from 'primeng/tabmenu'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CompareDirective } from './compare.directive';
import { CanDeactivateGuard } from '../_helpers/can-deactivate.guard';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

const modules = [
    ConfirmDialogModule, 
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,
    ProgressSpinnerModule,
    ScrollPanelModule,
    TabMenuModule,
    CardModule, 
];

const declaration = [UsphonePipe, DigitlenghtvalidatorDirective, CompareDirective]


@NgModule({
    declarations: [...declaration],
    imports: [
        ...modules
        //CommonModule,
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
        //TabMenuModule,

    ],
    exports: [
        //CommonModule,
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
        //TabMenuModule,
        ...modules,
        ...declaration
         
    ],
    providers: [
        MessageService,
        CanDeactivateGuard,
        ConfirmationService
    ]
})
export class SharedModule { }
