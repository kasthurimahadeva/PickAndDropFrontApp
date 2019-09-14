import { Component, OnInit } from '@angular/core';
import {ToastrManager} from 'ng6-toastr-notifications';
import {AuthenticationService} from '../shared/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private toastr: ToastrManager,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.authService.authenticated = localStorage.getItem('token') !== null;
  }

  logout() {
    this.authService.logout();
  }
}
