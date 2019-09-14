import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { CreateComplaintComponent } from './create-complaint/create-complaint.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule, MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {ComplaintListResolver} from './complaints-list/complaint-list.resolver';
import {MatSortModule} from '@angular/material/sort';
import {ToastrModule} from 'ng6-toastr-notifications';
import {ReactiveFormsModule} from '@angular/forms';
import { ComplaintConfirmDialogComponent } from './complaint-confirm-dialog/complaint-confirm-dialog.component';
import { ComplaintCancelDialogComponent } from './complaint-cancel-dialog/complaint-cancel-dialog.component';


@NgModule({
  declarations: [
    ComplaintsListComponent,
    ComplaintDetailsComponent,
    CreateComplaintComponent,
    ComplaintConfirmDialogComponent,
    ComplaintCancelDialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    MatDialogModule,
    ComplaintsRoutingModule
  ],
  providers: [
    ComplaintListResolver
  ],
  entryComponents: [
    ComplaintConfirmDialogComponent,
    ComplaintCancelDialogComponent
  ]
})
export class ComplaintsModule { }
