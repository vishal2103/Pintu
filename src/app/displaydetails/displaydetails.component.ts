import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {Http} from '@angular/http';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { StudentService } from '../student.service';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { AppComponent } from '../app.component';
import { Details } from '../detail/detail';
@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent implements OnInit {


  public myDetail: Details[] = [];


  constructor(private http: Http, private service: StudentService) {

  }


  ngOnInit() {
    this.myDetail = JSON.parse(localStorage.getItem("API"));

  }

}