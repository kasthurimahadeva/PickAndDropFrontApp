import { Component, OnInit } from '@angular/core';
import {CreateComplaintComponent} from '../complaints/create-complaint/create-complaint.component';
import {MatDialog} from '@angular/material';
import {Complaint} from '../complaints/complaint.model';
import {ComplaintsService} from '../complaints/complaints.service';
import {ToastrManager} from 'ng6-toastr-notifications';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
