import { Component, OnInit } from '@angular/core';
import { AstroPicture } from '../model/astro-picture';

@Component({
  selector: 'app-astro-picture',
  templateUrl: './astro-picture.component.html',
  styleUrls: ['./astro-picture.component.css']
})
export class AstroPictureComponent implements OnInit {
  picDay: AstroPicture = {
    id: 1,
    date: "2022-07-17",
    explanation: "dfgg dfgdgdf fdgdfg dfgdfg dfgdfg dfgdfg dfgdfg",
    hdurl: "https://www.nasa.gov/sites/default/files/thumbnails/image/cena_lic-lp-nature-cropped.jpg",
    mediaType: "image",
    serviceVersion: "v1",
    title: "A Supernova's Shockwaves",
    url: "http://short",
    base64: "string"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
