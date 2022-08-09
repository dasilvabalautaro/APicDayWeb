import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseCloud } from '../model/response-cloud';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) { }

  public getPicOfDay(date: string): Observable<ResponseCloud> {
    const url = 'http://nodejsexampleaws.us-east-1.elasticbeanstalk.com/apicday/';
    const dataBody = 'https://api.nasa.gov/planetary/apod?api_key=d5lJakXvDaJ5tBUOg9PDohG6FLoQy19qXgAtIczq&date=' + date;
    const body = { url: dataBody };
    return this.http.post<ResponseCloud>(url, body);
  }
}
