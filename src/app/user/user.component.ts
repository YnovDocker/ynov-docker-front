import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {CoolLocalStorage} from 'angular2-cool-storage';
import {Configuration} from '../../shared/app.constants';
import {User} from '../../shared/models/user';
import {UpdateUser} from '../../shared/models/helpers/update-user'
import {ChangePasswordObject} from "../../shared/models/helpers/change-password-object";
import {ChangeEmailObject} from "../../shared/models/helpers/change-email-object";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, CoolLocalStorage, Configuration]
})
export class UserComponent implements OnInit {
  localStorage: CoolLocalStorage;
  user: User;
  changePassword : ChangePasswordObject;

  private response: Object;
  private errorMessage: string;
  private errorCode: string;
  private infoMessage: string;

  constructor(private userService: UserService,
              localStorage: CoolLocalStorage) {
    this.localStorage = localStorage;
    this.changePassword = new ChangePasswordObject;
  }

  ngOnInit() {
    // const userId = localStorage.getItem('userId');
    const userId = "58f09faa7983e91b19e02b97";
    this.userService.GetSingleUserById(userId).subscribe(user => {
      this.user = user;
    });
  }

  saveUserModification(){
    let updateUser  = new UpdateUser(this.user);
    console.log(JSON.stringify(updateUser));
    this.userService.ChangeUserInformation(this.user._id, updateUser).subscribe(
        data => {
          this.response = data;
        },
        error => {
          console.log(JSON.parse(error._body).error);
          this.errorMessage = JSON.parse(error._body).error;
          this.infoMessage = null;
        },
        () => {
          console.log('Update User complete', this.response);
          this.infoMessage = 'Update User complete';
          this.errorMessage = null;
        }
    );
    setTimeout(function() {
      this.errorMessage = null;
      this.infoMessage = null;
    }.bind(this), 3000);
  }
  savePasswordModification(){
    this.userService.ChangeUserPassword(this.user._id, this.changePassword).subscribe(
        data => {
        },
        error => {
          console.log(error.json());
          this.errorMessage = error.json().errorMessage;
          this.errorCode = error.json().errorCode;
          this.infoMessage = null;
        },
        () => {
          this.infoMessage = 'Update password complete';
          this.errorMessage = null;
          this.errorCode = null;
          console.log(this.infoMessage, this.response);
          this.changePassword = new ChangePasswordObject;
        }
    );
    setTimeout(function() {
      this.errorMessage = null;
      this.infoMessage = null;
    }.bind(this), 3000);
  }

  stringToDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    } else {
      return null;
    }
  }

}