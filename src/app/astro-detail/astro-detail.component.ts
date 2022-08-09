import { Component, Input, OnInit } from '@angular/core';
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

  constructor(public serviceShared: ServiceSharedService) { }

  ngOnInit(): void {
    this.responseCloud = this.serviceShared.getResponseCloud();
    this.todayString = this.serviceShared.getDateCurrent();
  }

}
