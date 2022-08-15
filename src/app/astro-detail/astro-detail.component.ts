import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ResponseCloud } from '../model/response-cloud';
import { ServiceSharedService } from '../service-shared.service';

@Component({
  selector: 'app-astro-detail',
  templateUrl: './astro-detail.component.html',
  styleUrls: ['./astro-detail.component.css']
})
export class AstroDetailComponent implements OnInit {
  responseCloud?: ResponseCloud;
  todayString?: string;
  urlSafe?: SafeResourceUrl;

  constructor(public serviceShared: ServiceSharedService, 
    public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.responseCloud = this.serviceShared.getResponseCloud();
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.responseCloud.data.url);
    this.todayString = this.serviceShared.getDateCurrent();
  }

}
