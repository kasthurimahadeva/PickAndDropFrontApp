import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { CreateComplaintComponent } from './create-complaint/create-complaint.component';
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule, MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {ComplaintListResolver} from './complaints-list/complaint-list.resolver';
import {MatSortModule} from '@angular/material/sort';


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
  ],
  providers: [
    ComplaintListResolver
  ]
})
export class ComplaintsModule { }
