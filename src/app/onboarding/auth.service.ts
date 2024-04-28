import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//  service_url = 'http://localhost:3000/user'
service_url = 'http://localhost:3100/api/user';
token = '';
isAuthenticated = false;
userId:any
expireIn:any
 authStatusListner = new Subject<boolean>();
 tokenTimer:any
  constructor(private http: HttpClient,private router:Router) {
    this.token = String(localStorage.getItem("token"));
    this.expireIn = localStorage.getItem("expiresIn");
    this.userId = localStorage.getItem("userId");
  }

  signIn(username: string, password: string): Observable<any> {
    this.isAuthenticated = true;
    return this.http.post(`${this.service_url}/login`, {username:username,password:password})
  }
  createUser(fullname:string,username: string, password: string): Observable<any> {
    this.isAuthenticated = true;
    return this.http.post(`${this.service_url}/signup`, {fullname:fullname,username:username,password:password})
  }
  getToken(){
    return this.token
  }
  logout(){
    this.token = '';
    this.isAuthenticated = false;
    this.authStatusListner.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.userId = null
    this.router.navigate(['/onboarding/log-in'])
  }

  getAuthStatus(){
    return this.isAuthenticated;
  }
  getAuthStatusListner():Observable<any>{
    return this.authStatusListner.asObservable();
  }

   setAuthTimer(duration:number){
    console.log("timer", duration)
    this.tokenTimer= setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }
   saveAuthData(token:string, expirationDate:Date, userId:string){
    localStorage.setItem("token",token);
    localStorage.setItem("expiration",expirationDate.toISOString());
    // localStorage.setItem("userId", String(this.userId))
  }

   clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiresIn");
  }

  autoAuthenticate(){
    const authInformation = this.getAuthData();
    if(!authInformation){
      return;
    }
    const now = new Date();
    const expiresIn = authInformation?.expirationTime.getTime();
    const time = Number(expiresIn) - now.getTime();
    if(time > 0){
      this.token = authInformation?.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId
       this.setAuthTimer(time/1000);
      this.authStatusListner.next(true);
    }
  }
  private getAuthData(){
    const token = localStorage.getItem("token");
    const expirationTime = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    if(!token || !expirationTime){
      return;
    }
    return {token:token,expirationTime: new Date(expirationTime), userId:userId}
  }
  getUserId(){
    return this.userId
  }

  users = []
  getUser(){
    this.http.get<any>(`${this.service_url}/users`)
    .subscribe((transformPost:any)=>{
     this.users = transformPost.posts;
     console.log(this.users)
    })
   
  }

  getPostData(id:string){
    return this.http.get<any>(`${this.service_url}/users`+'/'+id);
    }
}