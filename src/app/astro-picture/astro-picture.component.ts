import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AstroPicture } from '../model/astro-picture';
import { ResponseCloud } from '../model/response-cloud';
import { PictureService } from '../services/picture.service';
import { ServiceSharedService } from '../service-shared.service';

@Component({
  selector: 'app-astro-picture',
  templateUrl: './astro-picture.component.html',
  styleUrls: ['./astro-picture.component.css']
})
export class AstroPictureComponent implements OnInit {
  urlSafe?: SafeResourceUrl;
  picDay: AstroPicture = {
    id: 0,
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    serviceVersion: "",
    title: "",
    url: "",
    base64: ""
  }

  responseCloud: ResponseCloud = {
    success: false,
    data: this.picDay
  }

  errorImage = 'https://i.imgur.com/XkU4Ajf.png';
  defaultImage = "https://www.nasa.gov/sites/default/files/thumbnails/image/cena_lic-lp-nature-cropped.jpg";
  pathImage = "";
  todayString: string = new Date().toDateString();
  todayDate: string = new Date().toISOString();
  arrayDate = this.todayDate.split('T');

  constructor(public pictureService: PictureService, 
    public serviceShared: ServiceSharedService, 
    public sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.pictureService.getPicOfDay(this.arrayDate[0])
      .subscribe(response => {
        this.responseCloud = response;
        this.serviceShared.setResponseCloud(this.responseCloud);
        this.pathImage = this.responseCloud.data.hdurl;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.responseCloud.data.url);
      })
    
    this.serviceShared.setDateCurrent(this.arrayDate[0]);
  }

}

// embed-responsive embed-responsive-21by9
// class="embed-responsive-item mt-4"