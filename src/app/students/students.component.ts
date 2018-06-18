import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  students: Array<Student> = new Array<Student>();
  student: Student = new Student();
  ngOnInit() {
    this.students = JSON.parse(localStorage.getItem("STUDENTS")) == null ? [] : JSON.parse(localStorage.getItem("STUDENTS"));
  }
 // editStudentRecord(index) {
  //  this.student = this.students[index];
 // }
  deleteStudentRecord(index) {
    this.students.splice(index, 1);
    localStorage.setItem("STUDENTS", JSON.stringify(this.students));    
  }

}
