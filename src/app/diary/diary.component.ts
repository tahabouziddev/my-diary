



import { Component, OnInit, ViewChild,AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { url } from 'inspector';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';



var body = document.body,
html = document.documentElement;


@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})

export class DiaryComponent implements OnInit,AfterViewInit {

  constructor(private route:ActivatedRoute,private router:Router,private update:LoggingService) { }

 url=this.route.snapshot.params
 urlo:number =parseInt( this.url.id )



@ViewChild('header') header:ElementRef;
result= Math.max( body.scrollHeight, body.offsetHeight, 
  html.clientHeight, html.scrollHeight, html.offsetHeight )-56;
  resulto=this.result.toString()+"px"
heightt:number;
heighttt:number;
height=this.result-this.heightt
num=1
content:string="type whatever you want here"

  ngOnInit(): void {
    this.updatedatabaseo()
    
  }

  ngAfterViewInit() {
 this.heighttt= this.header.nativeElement.offsetHeight;
    
    console.log(this.header.nativeElement.offsetHeight);
}
changeroute(){
  this.urlo=this.urlo+this.num
  this.router.navigate(['diary',this.urlo])
}
updatedatabase(){
this.update.update(this.content,this.urlo,this.update.gettoken()).subscribe(
  respo=>{
    console.log(respo);
    
  
  }
)
}
updatedatabaseo(){
  this.update.updateo(this.content,this.urlo,this.update.gettoken()).subscribe(
    respo=>{
      console.log(respo);
      this.content=respo
    
    }
  )
  }

}

