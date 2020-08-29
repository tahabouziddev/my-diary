



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

//  url=this.route.snapshot.params
//  urlo:number =parseInt( this.url.id )
       


@ViewChild('header') header:ElementRef;
//all properties declarations
urlo:number
result= Math.max( body.scrollHeight, body.offsetHeight, 
  html.clientHeight, html.scrollHeight, html.offsetHeight )-56;
  resulto=this.result.toString()+"px"
heightt:number;
heighttt:number;
height=this.result-this.heightt
num=1
content:string
contento:string
ther:string
margino=this.result/2
marginoo=this.margino.toString()+"px"
urlo1=this.urlo-this.num
urlo2=this.urlo+this.num
rotate=false
  ngOnInit(): void {
    this.update.subject.next(this.content)
    this.route.params.subscribe(res=>{
      this.urlo=parseInt(res.id)
    })
    console.log(this.urlo);
    
      this.update.updateo(this.content,this.urlo,this.update.gettoken()).subscribe(
        respo=>{
          console.log(respo);
          this.content=respo
        
        }
      )
      this.update.smthing.subscribe(res=>
        {
          if(res==true){
         this.update.content.subscribe(ponse=>{
          this.update.updateo(this.content,ponse,this.update.gettoken()).subscribe(
            respo=>{
              this.content=respo
            
            }
          )
          this.rotate=!this.rotate

          this.router.navigate(['diary',ponse])
         })

          }
        })
    
  }

  ngAfterViewInit() {
 this.heighttt= this.header.nativeElement.offsetHeight;
    
    console.log(this.header.nativeElement.offsetHeight);
}
urlore=this.urlo%2
changeroute(){
  this.update.updateo(this.content,this.urlo+1,this.update.gettoken()).subscribe(
    respo=>{
      console.log(respo);
      this.content=respo
    
    }
  )
  this.rotate=!this.rotate

 
  this.router.navigate(['diary',this.urlo+1])
  
}

rotatee(){
  if (this.rotate) {
    return 'rotate'
    
  }
}

changeroute1(){
  this.update.updateo(this.content,this.urlo-1,this.update.gettoken()).subscribe(
    respo=>{
      console.log(respo);
      this.content=respo
    
    }
  )
  this.rotate=!this.rotate

  this.router.navigate(['diary',this.urlo-1])
  


}


updatedatabase(){
this.update.update(this.content,this.urlo,this.update.gettoken()).subscribe(
  respo=>{
    console.log(respo);
    
  
  }
)
}


}

