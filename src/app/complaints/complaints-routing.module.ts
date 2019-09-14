import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComplaintsListComponent} from './complaints-list/complaints-list.component';
import {ComplaintDetailsComponent} from './complaint-details/complaint-details.component';
import {ComplaintListResolver} from './complaints-list/complaint-list.resolver';
import {CreateComplaintComponent} from './create-complaint/create-complaint.component';
import {AuthGuard} from '../guards/auth-guard.service';


const routes: Routes = [
  {
    path: 'complaint/create',
    component: CreateComplaintComponent
  },
  {
    path: 'complaint/:id',
    component: ComplaintDetailsComponent,
    resolve: {complaints: ComplaintListResolver},
    data: {requiresLogin: true},
    canActivate: [AuthGuard]
  },
  {
    path: 'complaints',
    component: ComplaintsListComponent,
    resolve: {complaints: ComplaintListResolver},
    data: {requiresLogin: true},
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsRoutingModule { }
