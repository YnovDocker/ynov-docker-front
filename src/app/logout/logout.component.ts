import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CoolLocalStorage} from "angular2-cool-storage";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  localStorage: CoolLocalStorage;

  constructor(localStorage: CoolLocalStorage,
              private router: Router) {
    this.localStorage = localStorage;

    this.localStorage.setItem('isConnected', 'false');
    this.localStorage.setItem('userId', '');
    this.localStorage.setItem('username', '');
    this.localStorage.setItem('firstname', '');
    this.localStorage.setItem('lastname', '');
    this.localStorage.clear();
    location.reload();
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
