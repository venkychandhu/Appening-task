import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    constructor(private router: Router, public service:MyserviceService) {  
    }
    ngOnInit() {
    }

    isvalid:boolean = false;

    public myform = new FormGroup({
        email:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        password:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z0-9@]{8,}")])
    });

    onsubmit(){
        let email = this.myform.value['email'];
        let password =this.myform.value['password'];
        if(email=="jupallenaresh8800@gmail.com" && password =="Naresh@123"){
            this.router.navigate(['/mydashboard']);
        }
        else {
          this.isvalid =true;
        }
        let result = this.service.validatingUserData(this.myform.value['email'],this.myform.value['password']);
        if(result)  {
            localStorage.setItem("em",this.myform.value['email']);
        } 
     }
}
