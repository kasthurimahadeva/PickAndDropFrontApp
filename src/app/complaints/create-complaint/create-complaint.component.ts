import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {ComplaintsService} from '../complaints.service';
import {Complaint} from '../complaint.model';
import {ToastrManager} from 'ng6-toastr-notifications';
import {Router} from '@angular/router';

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

  constructor(
    private complaintService: ComplaintsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrManager,
    private router: Router
  ) { }

  ngOnInit() {
    this.complaintForm = this.formBuilder.group({
      CustomerName: ['', Validators.required],
      EmailAddress: ['', [Validators.required, Validators.email]],
      ComplaintContent: ['', Validators.required]
    });
  }

  save() {
    this.complaint = this.complaintForm.value;
    this.complaint.Status = 'New';
    this.complaint.CreatedDateTime = new Date();
    this.complaintService.saveComplaint(this.complaint).subscribe(
      res => {
        this.toastr.successToastr('Complaint successfully sent', 'Success');
        this.router.navigate(['welcome']);
      }
    );
  }

  dismiss() {
    this.router.navigate(['welcome']);
  }

}
