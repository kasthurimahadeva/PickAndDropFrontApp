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


@NgModule({
  declarations: [ComplaintsListComponent, ComplaintDetailsComponent, CreateComplaintComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ComplaintsRoutingModule,
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
    ReactiveFormsModule
  ],
  providers: [
    ComplaintListResolver
  ]
})
export class ComplaintsModule { }
