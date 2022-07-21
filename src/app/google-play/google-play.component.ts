import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-play',
  templateUrl: './google-play.component.html',
  styleUrls: ['./google-play.component.css']
})
export class GooglePlayComponent implements OnInit {
  humanRights: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  showHumanRights(){
    this.humanRights = "The Universal Declaration of Human Rights. " + 
    "Article 27.-1. Everyone hast the right to freely take " + 
    "part in the cultural life of the community, to enjoy the arts, " + 
    "and to participate in scientific progress and its resulting benefits. " + 
    "2. Every person has the right to the protection of the moral and " + 
    "material interests that correspond to him by reason of the " + 
    "scientific, literary or artistic productions of which he is the author.";
  }
}
