import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Complaint} from '../complaints/complaint.model';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/authentication.service';
import {ToastrManager} from 'ng6-toastr-notifications';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  complaint: Complaint;
  pageTitle = 'Login to your account';
  subTitle = 'Enter your credentials...';

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private toastr: ToastrManager,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  cancel() {
    this.router.navigate(['welcome']);
  }

  login() {
    this.authService.login(this.loginForm.value);
  }
}
