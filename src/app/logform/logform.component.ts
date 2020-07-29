import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { FormsModule, NgForm } from '@angular/forms';
import { users } from '../user.data.model';

@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.css']
})
export class LogformComponent implements OnInit {
  yo:string="uguhhi";
  emailo:string="";
  passwordo:string="";
  eror:string =""
  
 
  constructor(private logging:LoggingService,private forms :FormsModule) { }
  
  ngOnInit(): void {
    
  }

signuser(){
  this.logging.signup(this.emailo,this.passwordo).subscribe((resdata=>{
    if(resdata==1){
     console.log("suc")
    }else{
    this.eror =  this.logging.error

    } }
   )
   );
}
  token=this.logging.gettoken();
 
}
