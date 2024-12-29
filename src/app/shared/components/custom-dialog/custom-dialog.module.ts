import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { CustomDialogComponent } from './custom-dialog.component';



@NgModule({
  declarations: [
    CustomDialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [
    CustomDialogComponent
  ]
})
export class CustomDialogModule { }
