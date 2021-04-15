import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit {

  constructor(public route:Router) { }
  
  ngOnInit() {
  }
  logout(){
    localStorage.clear();
   this.route.navigate([""]);
  }
}
