import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
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

  public submitted = false;
  registerForm: FormGroup;
  public events: any[] = [];

  private response: Object;
  private errorMessage: string;
  private infoMessage: string;
  private signupUser: SignupUser;

  constructor(private userServiceInstance: UserService,
              private router: Router,
              localStorage: CoolLocalStorage,
              private _fb: FormBuilder) {
    this.localStorage = localStorage;

  }

  ngOnInit() {
    //defining FormGroup
    this.registerForm = this._fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }

  onSubmitRegister(event) {
    this.submitted = true;
    this.signupUser = new SignupUser();
    // console.log('email: ' + this.registerForm.get('email').value);
    this.signupUser.email = this.registerForm.get('email').value;
    this.signupUser.username = this.registerForm.get('username').value;
    this.signupUser.firstname = this.registerForm.get('firstname').value;
    this.signupUser.lastname = this.registerForm.get('lastname').value;
    this.signupUser.password = this.registerForm.get('password').value;
    this.signupUser.passwordConfirmation = this.registerForm.get('passwordConfirmation').value;
    console.log('onSubmitRegister');
    console.log('signupUser: ' + JSON.stringify(this.signupUser));
    console.log('event: ' + JSON.stringify(event));
    this.registerUser();
  }

  /*consomme l'api pour singup le user*/
  private registerUser(): void {
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
