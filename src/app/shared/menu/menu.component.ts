import { Component, OnInit } from '@angular/core';
import {CoolLocalStorage} from "angular2-cool-storage";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isConnectedMenu: string;
  localStorage: CoolLocalStorage;

  constructor(localStorage: CoolLocalStorage) {
    this.localStorage = localStorage;

  }

  ngOnInit() {
    this.isConnectedMenu = this.localStorage.getItem('isConnected') || 'false';
  }

}
