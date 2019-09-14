import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-complaint-cancel-dialog',
  templateUrl: './complaint-cancel-dialog.component.html',
  styleUrls: ['./complaint-cancel-dialog.component.css']
})
export class ComplaintCancelDialogComponent implements OnInit {

  constructor(private router: Router,
              private dialogRef: MatDialogRef<ComplaintCancelDialogComponent>) { }

  ngOnInit() {
  }

  confirm() {
    this.dialogRef.close();
    this.router.navigate(['welcome']);
  }

  cancel() {
    this.dialogRef.close();
  }
}
