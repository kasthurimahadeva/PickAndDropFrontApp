import { Component, OnInit } from '@angular/core';
import {Complaint} from '../complaint.model';
import {ComplaintsService} from '../complaints.service';
import {ToastrManager} from 'ng6-toastr-notifications';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-complaint-confirm-dialog',
  templateUrl: './complaint-confirm-dialog.component.html',
  styleUrls: ['./complaint-confirm-dialog.component.css']
})
export class ComplaintConfirmDialogComponent implements OnInit {

  complaint: Complaint;
  constructor(private complaintService: ComplaintsService,
              private toastr: ToastrManager,
              private router: Router,
              private dialogRef: MatDialogRef<ComplaintConfirmDialogComponent>) { }

  ngOnInit() {
    this.complaint = this.complaintService.formData;
  }

  save() {
    this.complaint.Status = 'New';
    this.complaint.CreatedDateTime = new Date();
    this.complaintService.saveComplaint(this.complaint).subscribe(
      res => {
        this.toastr.successToastr('Complaint successfully sent', 'Success');
        this.router.navigate(['welcome']);
      }
    );
    this.dialogRef.close();
  }

  edit() {
    this.dialogRef.close();
  }
}
