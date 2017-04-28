import { Component, OnInit } from '@angular/core';
import {FileService} from "../../shared/services/file.service";
import {CoolLocalStorage} from "angular2-cool-storage";
import {Configuration} from "../../shared/app.constants";
import {File} from "../../shared/models/file";


@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  providers: [FileService, CoolLocalStorage, Configuration]

})
export class ViewerComponent implements OnInit {
  localStorage: CoolLocalStorage;
  userId: string;
  images: Array<File> = [];
  selectedImage;
  backEndUrl: string;

  constructor(private fileService: FileService,
              localStorage: CoolLocalStorage) {
    this.localStorage = localStorage;
    this.userId = this.localStorage.getItem('userId');
    this.backEndUrl = "http://localhost:10010";
  }

  ngOnInit() {
    this.fileService.GetFileByUserId(this.userId).subscribe(files => {
      this.images = files;
      console.log(this.images);
    });
  }

  setSelectedImage(image){
    this.selectedImage= image;
  }

}
