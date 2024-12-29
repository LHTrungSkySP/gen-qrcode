import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenCodeComponent } from './gen-code.component';
import { RouterModule } from '@angular/router';
import { CommonFormModule } from 'app/shared/common-form/common-form.module';
import { QRCodeModule } from 'angularx-qrcode';
import { CustomDialogModule } from 'app/shared/components/custom-dialog/custom-dialog.module';

@NgModule({
  declarations: [
    GenCodeComponent
  ],
  imports: [
    CommonModule,
    CommonFormModule,
    CustomDialogModule,
    QRCodeModule,
    RouterModule.forChild([
      {
        path: '',
        component: GenCodeComponent
      }
    ]),

  ],
  exports: [
    GenCodeComponent
  ]
})
export class GenCodeModule { }
