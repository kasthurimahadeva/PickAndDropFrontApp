import { Component, OnInit } from '@angular/core';
import {Complaint} from '../complaint.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ComplaintsService} from '../complaints.service';
import {ToastrManager} from 'ng6-toastr-notifications';

@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.css']
})
export class ComplaintDetailsComponent implements OnInit {
  pageTitle = 'Complaint Details';
  complaint: Complaint;
  id: number;

  constructor(private route: ActivatedRoute,
              private complaintService: ComplaintsService,
              private router: Router,
              private toastr: ToastrManager) {
    if (this.complaintService.complaintsList.length === 0) {
      this.complaintService.complaintsList = this.route.snapshot.data.complaints;
    }
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.complaint = this.complaintService.findComplaint(this.id);
  }

  onBack(): void {
    this.router.navigate(['/complaints']);
  }

  onResolved() {
    this.complaint.Status = 'Resolved';
    this.complaintService.updateComplaint(this.id, this.complaint).subscribe(
      res => {
        this.toastr.successToastr('Complaint is resolved', 'Success');
        this.router.navigate(['/complaints']);
      }
    );
  }

  onMove() {
    this.complaint.Status = 'Move to high level';
    this.complaintService.updateComplaint(this.id, this.complaint).subscribe(
      res => {
        this.toastr.successToastr('Complaint is moved to High level', 'Success');
        this.router.navigate(['/complaints']);
      });
  }

  onPending() {
    this.complaint.Status = 'Pending';
    this.complaintService.updateComplaint(this.id, this.complaint).subscribe(
      res => {
        this.toastr.warningToastr('Complaint is pending', 'Pending');
        this.router.navigate(['/complaints']);
      });
  }
}
