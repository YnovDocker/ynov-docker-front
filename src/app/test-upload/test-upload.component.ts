import {Component, Directive, OnInit} from '@angular/core';
import {FileUploader} from "ng2-file-upload";

const userId = '58f09faa7983e91b19e02b97';
const URL = 'http://localhost:10010/api/file/'+userId;
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-test-upload',
  templateUrl: './test-upload.component.html',
  styleUrls: ['./test-upload.component.css']
})
export class TestUploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: URL});

  constructor() {
  }

  ngOnInit() {
  }

}

// class FileSelectDirective
// @Directive({ selector: '[ng2FileSelect]' })
