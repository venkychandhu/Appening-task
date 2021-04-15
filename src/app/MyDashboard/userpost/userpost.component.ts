import { Component, Input, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {

 
@Input() userdata:any;
  datalist :any;
  constructor(public datafromservice:MyserviceService){
  }
  ngOnInit(){
    this.datafromservice.getdatafromser().subscribe(
      (res:any)=>{
        this.datalist=res;
        console.log(this.datalist);
    });
    console.log(this.userdata);
  }

  adddata(data:{name:string,age:number,phone:number,place:string}){
      this.userdata.push(data);
      this.userdata.push(data);
      this.userdata.push(data);
  }

}
