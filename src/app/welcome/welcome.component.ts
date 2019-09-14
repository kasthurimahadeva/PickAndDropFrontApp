import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import {ToastrManager} from 'ng6-toastr-notifications';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private toastr: ToastrManager) { }

  ngOnInit() {
    if (localStorage.getItem('authenticated') === 'true') {
      this.authService.getUserProfile().subscribe(
        (res: any) => {
          localStorage.setItem('user', res);
          this.toastr.infoToastr('Welcome to Pick and Drop: ' + res.FullName, 'Welcome');
        }
      );
    }
  }

}
