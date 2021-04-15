import { Injectable, NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@NgModule({
  providers:[MyserviceService]
})
export class MyserviceService {

  constructor(public httpref:HttpClient) { }

  getdatafromser():Observable <any> {
    
      return this.httpref.get<any>("https://jsonplaceholder.typicode.com/posts");
  }

  validatingUserData(username,password) {
      return true;
  }


  userdatadata(){
    return [
      {
        username:"naresh",
      palce:"kurnool",
      dob:"19-12-1998",
    }
    ]
  }

}
