import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { AppComponent } from '../app.component';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  myData = {

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
  
  ngOnInit() {


    
    
  
       
   
  }

  //  constructor(private router: Router,
  //    private service: StudentService) {

  //  }
  constructor(private http: Http, private service: StudentService) { }

  // DoLogin()
  // {


  // };





  DoLogin() {
    this.service.addData(this.myData).subscribe(data => {

      console.log(data);
      //let body = data.json();
     localStorage.setItem("API", JSON.stringify(data));
      let body = data.json();
     localStorage.setItem("API", JSON.stringify(body.results));
     

     
     
       
      
      
      

    },
      err => {
        console.error(err);
      }

    )


  }


}


















