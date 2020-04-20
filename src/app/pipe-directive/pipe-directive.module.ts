import { NgModule } from '@angular/core';
import { PipeDirectiveComponent } from './pipe-directive.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: '', component: PipeDirectiveComponent }
];

@NgModule({
    declarations: [PipeDirectiveComponent],
    imports: [ 
        RouterModule.forChild(routes),
        
        //ToastModule, MessagesModule, MessageModule,
        //PanelModule,
        //DropdownModule,
        //InputTextModule,
        //InputTextareaModule,
        //ButtonModule,
        //TableModule,
        //CardModule,
        SharedModule
    ],
    exports: [RouterModule]

})
export class PipeDirectiveModule { }
