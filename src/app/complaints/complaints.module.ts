import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { CreateComplaintComponent } from './create-complaint/create-complaint.component';


@NgModule({
  declarations: [ComplaintsListComponent, ComplaintDetailsComponent, CreateComplaintComponent],
  imports: [
    CommonModule,
    ComplaintsRoutingModule
  ]
})
export class ComplaintsModule { }
