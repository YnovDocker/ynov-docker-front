import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {CoolLocalStorage} from "angular2-cool-storage";
import {Configuration} from "../../../shared/app.constants";

@Component({
  selector: 'app-test-upload',
  templateUrl: './test-upload.component.html',
  styleUrls: ['./test-upload.component.css'],
  providers: [CoolLocalStorage]

})
export class TestUploadComponent implements OnInit {
  @Output() updateList = new EventEmitter<string>();

  localStorage: CoolLocalStorage;
  userId: string;
  public uploader: FileUploader;
  private URL : string; // = 'http://localhost:10010/api/file/';

  constructor(localStorage: CoolLocalStorage,
              private _configuration: Configuration) {
    this.URL = _configuration.ServerWithApiUrl +'file/';
    this.localStorage = localStorage;
    this.userId = this.localStorage.getItem('userId');
    this.uploader =  new FileUploader({url: this.URL+this.userId});

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      // let responsePath = JSON.parse(response);
      // console.log(response, responsePath);// the url will be in the response
      this.updateList.emit('LIST_UPDATED');
    };
  }

  ngOnInit() {
  }

}
