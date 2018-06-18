import { Component, OnInit } from '@angular/core'
import { Student } from '../Model/Student';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-edit-student-detail',     
  templateUrl: './edit-student-detail.component.html',
  styleUrls: ['./edit-student-detail.component.css']
})
export class EditStudentDetailComponent implements OnInit {
  students: Array<Student> = new Array<Student>();
  student: Student = new Student();
  constructor(private _router: ActivatedRoute,private_router:Router) {
    this.students = JSON.parse(localStorage.getItem("STUDENTS")) == null ? [] : JSON.parse(localStorage.getItem("STUDENTS"));
    let index = null;
    this._router.params.subscribe(param => {
      index = param["index"];
    });
    this.student = this.students[index] != null ? this.students[index] : new Student(); 
 }
resaveData() {
 
  localStorage.setItem("STUDENTS", JSON.stringify(this.students));
  this.student = new Student();
}


  ngOnInit() {
  }
 
}

