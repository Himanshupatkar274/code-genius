import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HtmlInterview } from './html/html.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  serviceUrl = 'http://localhost:3100/api';
  invokeHTMLQuestion = new Subject();
  invokeCSSQuestion = new Subject();
  invokeJSQuestion = new Subject();
  invokeAngularQuestion = new Subject();
  invokeNodeQuestion = new Subject();
  constructor(private http:HttpClient) { }

  getHtmlQuestion(){
    return this.http.get<HtmlInterview>(`${this.serviceUrl}/question/html`)
  }
  getAngularQuestion(){
    return this.http.get<HtmlInterview>(`${this.serviceUrl}/question/angular`)
  }
  getCssQuestion(){
    return this.http.get<HtmlInterview>(`${this.serviceUrl}/question/css`)
  }
  getJsQuestion(){
    return this.http.get<HtmlInterview>(`${this.serviceUrl}/question/js`)
  }
  getNodeQuestion(){
    return this.http.get<HtmlInterview>(`${this.serviceUrl}/question/node`)
  }
}
