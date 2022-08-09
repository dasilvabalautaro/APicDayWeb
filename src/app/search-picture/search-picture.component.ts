import { Component, OnInit } from '@angular/core';
import { AstroPicture } from '../model/astro-picture';
import { ResponseCloud } from '../model/response-cloud';
import { PictureService } from '../services/picture.service';

@Component({
  selector: 'app-search-picture',
  templateUrl: './search-picture.component.html',
  styleUrls: ['./search-picture.component.css']
})
export class SearchPictureComponent implements OnInit {
  todayDate: string = new Date().toISOString();
  arrayDate = this.todayDate.split('T');
  selectedDate?: string;
  currentDate?: string; 

  picDay: AstroPicture = {
    id: 0,
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    serviceVersion: "",
    title: "Select Date",
    url: "",
    base64: ""
  }

  responseCloud: ResponseCloud = {
    success: false,
    data: this.picDay
  }

  constructor(public pictureService: PictureService) { }

  ngOnInit(): void {
    this.currentDate = this.arrayDate[0];
  }

  onSelect(value: string): void {
    this.selectedDate = value;
    this.pictureService.getPicOfDay(this.selectedDate)
      .subscribe(response => {
        this.responseCloud = response;
      })
  }
}
