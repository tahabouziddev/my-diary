import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private http: HttpClient, private router : Router,private update:LoggingService,private route:ActivatedRoute) { }
id:string
realid=parseInt(this.id)
content:string


onsearch(){
//   this.update.subject.subscribe(res=>
//     {
//       this.content=res
//     })
// this.update.updateo(this.content,this.realid,this.update.gettoken()).subscribe(
//   respo=>{
//     console.log(respo);
//     this.content=respo
  
//   }
// )
// this.router.navigate(['diary',this.realid])
this.update.smthing.next(true)
this.update.content.next(this.id)



}

  ngOnInit(): void {
   
  
}}