import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { users } from './user.data.model';
@Injectable({ 
  providedIn: 'root'
})
export class LoggingService {

error:string = ""
settoken(token){
  localStorage.setItem('token',token);
    };
gettoken(){
 return localStorage.getItem('token');
}
  constructor( private http : HttpClient ,private router :Router ) { }
  signup(email,password){
   return this.http.post('http://makemoneyy.tech/signupo.php',
     {email,password},{responseType:'text'}
     ).pipe(map(respdata=>{
      if(isNaN(parseInt(respdata))){
        this.error=respdata;
      }
      else{
       this.settoken(respdata);
       return 1
     }}

     ))
      }}