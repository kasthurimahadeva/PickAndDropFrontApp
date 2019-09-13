import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComplaintsListComponent} from './complaints-list/complaints-list.component';
import {ComplaintDetailsComponent} from './complaint-details/complaint-details.component';
import {ComplaintListResolver} from './complaints-list/complaint-list.resolver';
import {CreateComplaintComponent} from './create-complaint/create-complaint.component';


const routes: Routes = [
  {
    path: 'complaint/create',
    component: CreateComplaintComponent
  },
  {
    path: 'complaints',
    component: ComplaintsListComponent,
    resolve: {complaints: ComplaintListResolver}
  },
  {
    path: '',
    redirectTo: 'complaints',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'complaints',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsRoutingModule { }
