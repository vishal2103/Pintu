import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Http,HttpModule} from '@angular/http';
import { Injectable } from "@angular/core";
//import { currentId } from 'async_hooks';
import { StudentService } from './student.service';

import {LoginpageComponent} from './loginpage/loginpage.component';
import { CompileShallowModuleMetadata } from '@angular/compiler';
//import { HttpModule } from '@angular/http';

@Component({
	
	
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit {
  myData ={
    
    "login_id": "s_bhati@hotmail.com",
    "password": "Zaq12wsx",
    "business_id":5,
    "role_id":1,
    "role":"Owner",
    "first_name":"Sanjay",
    "last_name":"Bhati",
    "location_id":0,
    "location_name":null,
    }
  myTxt: string = "";
  //constructor() {
  //  console.log("Inside constructor");
  // }
  constructor(private service: StudentService) { }
  ngOnInit() {
  
     
this.service.addData(this.myData).subscribe(data=>
{

   console.log(data);
  
  // localStorage.setItem("API",JSON.stringify(data));
},
 err=>{
   console.error(err);
 }
)

        }
      
  }
 


