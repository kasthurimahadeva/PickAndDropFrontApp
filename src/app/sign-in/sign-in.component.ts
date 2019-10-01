import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Complaint} from '../complaints/complaint.model';
import {Router, ActivatedRoute} from '@angular/router';
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
  redirectUrl: string = '';

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.redirectUrl = params['returnUrl'] || 'welcome');
    console.log(this.redirectUrl);
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  cancel() {
    this.router.navigate(['welcome']);
  }

  login() {
    this.authService.login(this.loginForm.value, this.redirectUrl);
  }
}
