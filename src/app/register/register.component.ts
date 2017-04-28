import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {Configuration} from '../../shared/app.constants';
import {SignupUser} from '../../shared/models/helpers/signup-user';
import {Router} from '@angular/router';
import * as _ from 'lodash';
import {CoolLocalStorage} from 'angular2-cool-storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService, CoolLocalStorage, Configuration]
})
export class RegisterComponent implements OnInit {
  localStorage: CoolLocalStorage;

  submitted = false;

  private response: Object;
  private errorMessage: string;
  private infoMessage: string;
  public signupUser: SignupUser;

  constructor(private userServiceInstance: UserService,
              private router: Router,
              localStorage: CoolLocalStorage) {
    this.localStorage = localStorage;
  }

  ngOnInit() {
  }

  onSubmit(event) {
    this.submitted = true;
    this.signupUser = new SignupUser();
    this.signupUser.email = event.target[1].value;
    // todo recup values du form (utiliser onsubmit sur le template
    console.log('hi');
    this.registerUser();
  }

  /*consomme l'api pour singup le user*/
  public registerUser(): void {
    console.log('hello ');
    /*todo use POST /users/ to add a new user to the DB*/
    this.userServiceInstance
      .RegisterUser(this.signupUser)
      .subscribe(
        data => this.response = data,
        error => {
          console.log(JSON.parse(error._body).error);
          this.errorMessage = JSON.parse(error._body).error;
          this.infoMessage = null;
        },
        () => {
          console.log('signup User complete', this.response);
          this.infoMessage = 'Check Now your Email to signup ...';
          this.errorMessage = null;
        }
      );
  }
}
