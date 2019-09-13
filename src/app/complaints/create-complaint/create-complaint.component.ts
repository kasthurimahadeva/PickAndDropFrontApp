import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {ComplaintsService} from '../complaints.service';
import {Complaint} from '../complaint.model';
import {ToastrManager} from 'ng6-toastr-notifications';
import {Router} from '@angular/router';
import {ComplaintConfirmDialogComponent} from '../complaint-confirm-dialog/complaint-confirm-dialog.component';
import {ComplaintCancelDialogComponent} from '../complaint-cancel-dialog/complaint-cancel-dialog.component';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.css']
})
export class CreateComplaintComponent implements OnInit {
  complaintForm: FormGroup;
  complaint: Complaint;
  pageTitle = 'New Complaint';
  subTitle = 'Enter your complaint...';
  dialogConfig = new MatDialogConfig();

  constructor(
    private complaintService: ComplaintsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrManager,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
  }

  ngOnInit() {
    this.complaintForm = this.formBuilder.group({
      CustomerName: ['', Validators.required],
      EmailAddress: ['', [Validators.required, Validators.email]],
      ComplaintContent: ['', Validators.required]
    });
  }

  openConfirmationDialog() {
    this.complaint = this.complaintForm.value;
    this.complaint.Status = 'Confirmation';
    this.complaint.CreatedDateTime = new Date();
    this.complaintService.formData = this.complaint;

    const dialogRef = this.dialog.open(ComplaintConfirmDialogComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          console.log('edit');
        }
      }
    );
  }

  openCancelDialog() {
    const dialogRef = this.dialog.open(ComplaintCancelDialogComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          console.log('cancel');
        }
      }
    );
  }
}
