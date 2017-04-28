import {Component, ElementRef, OnInit, Renderer, ViewChild} from '@angular/core';
import {CoolLocalStorage} from "angular2-cool-storage";
import {FileService} from "../../../shared/services/file.service";
import {Configuration} from "../../../shared/app.constants";
import {File} from "../../../shared/models/file";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers: [FileService, CoolLocalStorage, Configuration]

})
export class PanelComponent implements OnInit {
  localStorage: CoolLocalStorage;
  userId: string;
  images: Array<File> = [];
  public elementRef;


  constructor(private fileService: FileService,
              localStorage: CoolLocalStorage,
              myElement: ElementRef) {

    this.elementRef = myElement;
    this.localStorage = localStorage;
    this.userId = this.localStorage.getItem('userId');
  }

  ngOnInit() {
    this.images = null;
    this.fileService.GetFileByUserId(this.userId).subscribe(files => {
      this.images = files;
      console.log(this.images);
    });
  }

  refreshList= (value:string) => {
    this.images = null;
    console.log("Trigger event "+value);
    this.fileService.GetFileByUserId(this.userId).subscribe(files => {
      this.images = files;
      console.log(this.images);
    });
  }

  deleteFile = (fileId: string) : void => {
    this.images = null;
      console.log('delete file ' + fileId);
    this.fileService.DeleteFile(fileId).subscribe(file => {
      console.log('file deleted',file);
      this.fileService.GetFileByUserId(this.userId).subscribe(files => {
        this.images = files;
        console.log(this.images);
      });
    });
  }

}
