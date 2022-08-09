import { Injectable } from '@angular/core';
import { ResponseCloud } from './model/response-cloud';
import { AstroPicture } from './model/astro-picture';

@Injectable({
  providedIn: 'root'
})
export class ServiceSharedService {
  dateCurrent: string = "";
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

  constructor() { }

  public setResponseCloud(responseCloud: ResponseCloud){
    this.responseCloud = responseCloud;
  }

  public getResponseCloud() {
    return this.responseCloud;
  }

  public setDateCurrent(date: string){
    this.dateCurrent = date;
  }

  public getDateCurrent() {
    return this.dateCurrent;
  }
}
