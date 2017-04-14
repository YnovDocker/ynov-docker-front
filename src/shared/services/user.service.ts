import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {Configuration} from '../app.constants';
import {ChangePasswordObject} from '../models/helpers/change-password-object';
import {ChangeEmailObject} from '../models/helpers/change-email-object';
import {User} from '../models/user';
import {SignupUser} from '../models/helpers/signup-user';

@Injectable()
export class UserService {

  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl;

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public GetAllUsers = (): Observable<String> => {
    console.log(this.actionUrl);
    return this._http.get(this.actionUrl + 'user/')
      .map(response => response.json());
  }

  public GetSingleUserById = (id: string): Observable<String> => {
    console.log(this.actionUrl + 'user/' + id + '/getUserById')
    return this._http.get(this.actionUrl + 'user/' + id + '/getUserById')
      .map(response => response.json());
  }

  public GetSingleUserByUsername = (Username: string): Observable<String> => {
    return this._http.get(this.actionUrl + 'user/' + Username + '/getUserByUsername')
      .map(response => response.json());
  }

  /*Fonctionne*/
  public Delete = (id: string): Observable<Response> => {
    return this._http.put(this.actionUrl + 'user/' + id + '/deleteUser', '');
  }

  /*Fonctionne*/
  public ChangeUserPassword = (id: string, Variable: ChangePasswordObject): Observable<Response> => {
    const JsonBody = JSON.stringify(Variable);
    console.log(JsonBody);
    return this._http.put(this.actionUrl + 'user/' + id + '/updatePassword', JsonBody, {headers: this.headers});
  }

  /*Fonctionne*/
  public ChangeUserEmail = (id: string, Variable: ChangeEmailObject): Observable<Response> => {
    const JsonBody = JSON.stringify(Variable);
    console.log(JsonBody);
    return this._http.put(this.actionUrl + 'user/' + id + '/updateEmail', JsonBody, {headers: this.headers});
  }

  /*Fonctionne*/
  public ChangeUserInformation = (id: string, Variable: User): Observable<Response> => {
    const JsonBody = JSON.stringify(Variable);
    return this._http.put(this.actionUrl + 'user/' + id + '/updateUser', JsonBody, {headers: this.headers});
  }

  public AddUser = (Variable: User): Observable<Response> => {
    const JsonBody = JSON.stringify(Variable);
    return this._http.post(this.actionUrl + 'user/addUser', JsonBody, {headers: this.headers})
      .map((response => response.json()));
  }
  public RegisterUser = (Variable: SignupUser): Observable<Response> => {
    const JsonBody = JSON.stringify(Variable);
    const url = this.actionUrl + 'user/register';
    console.log('Querying ' + url);
    return this._http.post(url, JsonBody, {headers: this.headers})
      .map((response => response.json()));
  }
}
