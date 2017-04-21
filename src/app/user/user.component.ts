import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {CoolLocalStorage} from 'angular2-cool-storage';
import {Configuration} from '../../shared/app.constants';
import {User} from '../../shared/models/user';
import {UpdateUser} from '../../shared/models/helpers/update-user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, CoolLocalStorage, Configuration]
})
export class UserComponent implements OnInit {
  localStorage: CoolLocalStorage;
  user: User;

  private response: Object;
  private errorMessage: string;
  private infoMessage: string;

  constructor(private userService: UserService,
              localStorage: CoolLocalStorage) {
    this.localStorage = localStorage;
  }

  ngOnInit() {
    // const userId = localStorage.getItem('userId');
    const userId = "58f09faa7983e91b19e02b97";
    this.userService.GetSingleUserById(userId).subscribe(user => {
      this.user = user;
    });
  }

  onSubmit(){
    let updateUser  = new UpdateUser(this.user);
    console.log(JSON.stringify(updateUser));
    this.userService.ChangeUserInformation(this.user._id, updateUser).subscribe(
        data => this.response = data,
        error => {
          // console.log(JSON.parse(error._body).error);
          // this.errorMessage = JSON.parse(error._body).error;
          this.infoMessage = null;
        },
        () => {
          console.log('Update User complete', this.response);
          this.infoMessage = 'Update User complete';
          this.errorMessage = null;
        }
    );
  }

  stringToDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    } else {
      return null;
    }
  }

}