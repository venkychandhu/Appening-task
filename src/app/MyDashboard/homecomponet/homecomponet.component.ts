import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-homecomponet',
  templateUrl: './homecomponet.component.html',
  styleUrls: ['./homecomponet.component.css']
})
export class HomecomponetComponent implements OnInit {

  userdata:any;
  constructor(public myserviceService:MyserviceService) { }

  ngOnInit(): void {
    this.userdata =this.myserviceService.userdatadata();
  }

}
