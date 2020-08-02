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
  eror:string =""
  token:number;
  
 
  constructor(private logging:LoggingService,private forms :FormsModule,private router:Router) { }
  
  ngOnInit(): void {
    if(this.token!=null){
this.router.navigate["/diary"]
    }
  }

signuser(){
  this.logging.signup(this.email,this.password).subscribe((resdata=>{
    if(resdata==1){
     console.log("suc");
     this.token= parseInt(this.logging.gettoken());
    }else{
    this.eror =  this.logging.error

    } }
   )
   );
}
  
 
}
