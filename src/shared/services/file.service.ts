import { Injectable } from '@angular/core';
import {Configuration} from "../app.constants";
import {Http} from "@angular/http";
import {File} from "../models/file";
import {Observable} from "rxjs";

@Injectable()
export class FileService {

  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl;

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public GetFileByUserId = (userId: string): Observable<File[]> => {
    console.log(this.actionUrl);
    return this._http.get(this.actionUrl + 'file/'+userId+'/getFileByUserId')
      .map(response => (response.json() as File[]));
  }

  public DeleteFile = (userId: string): Observable<File> => {
    return this._http.put(this.actionUrl + 'file/'+userId+'/deleteFile', {})
      .map(response => (response.json() as File));
  }

}
