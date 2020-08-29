import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { users } from './user.data.model';
import { Subject } from 'rxjs';
@Injectable({ 
  providedIn: 'root'
})
export class LoggingService {
php :string ="http://makemoneyy.tech"
error:string = ""
error2:string=""
settoken(token){
  localStorage.setItem('token',token);
    };
gettoken(){
 return localStorage.getItem('token');
}
  constructor( private http : HttpClient ,private router :Router ) { }
  signup(email,password){
   return this.http.post(`${this.php}/signupo.php`,
     {email,password},{ responseType:"text"}
     ).pipe(map(respdata=>{
       console.log(respdata);
       
       if(isNaN(parseInt(respdata))){
        this.error=respdata;
      }
      else{
       this.settoken(respdata);
       return 1
     }
    }

     ))
      }
    
    login(email,password){
      return this.http.post(`${this.php}/logino.php`,
      {email,password},{ responseType:"text"}
      ).pipe(map(respdata=>{
        console.log(respdata);
        
        if(isNaN(parseInt(respdata))){
         this.error2=respdata;
       }
       else{
        this.settoken(respdata);
        return 1
      }
     }
 
      ))
    }
    
update(content,route,id){
  return this.http.post(`${this.php}/update.php`,
  {route,content,id},{ responseType:"text"}
  )
}
updateo(content,route,id){
  return this.http.post(`${this.php}/update2.php`,
  {route,content,id},{ responseType:"text"}
  )
}

//cross dat comunication
 subject = new Subject<string>();
 content= new Subject<string>();
 smthing= new Subject<boolean>();

    }