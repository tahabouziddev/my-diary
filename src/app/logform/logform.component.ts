import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { FormsModule, NgForm } from '@angular/forms';
import { users } from '../user.data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.css']
})
export class LogformComponent implements OnInit {
  yo:string="uguhhi";
  email:string="";
  password:string="";
  email2:string="";
  password2:string="";
  eror:string ="";
  eror2:string="";
  token:number=parseInt(this.logging.gettoken());
  
 
  constructor(private logging:LoggingService,private forms :FormsModule,private router:Router) { }
  
  ngOnInit(): void {
    if(this.token){
this.router.navigate(['/diary']);
    }
  }

signuser(){
  this.logging.signup(this.email,this.password).subscribe((resdata=>{
    if(resdata==1){
     console.log("suc");
     this.token= parseInt(this.logging.gettoken());
     this.router.navigate(["/diary"]);
    }else{
    this.eror =  this.logging.error

    } }
   )
   );
}
  loguser(){
    this.logging.login(this.email2,this.password2).subscribe((resdata=>{
      if(resdata==1){
       console.log("suc");
       this.token= parseInt(this.logging.gettoken());
       this.router.navigate(['/diary']);
      }else{
      this.eror2 =  this.logging.error2;
  
      } }
     )
     );
  }
 
}
