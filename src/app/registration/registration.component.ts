

import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/Student';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StudentService } from '../student.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  students: Array<Student> = new Array<Student>();
  student: Student = new Student();
  constructor(private _router: Router,_studentService: StudentService) {

  }
  ngOnInit() {
    this.students = JSON.parse(localStorage.getItem("STUDENTS")) == null ? [] : JSON.parse(localStorage.getItem("STUDENTS"));
  
  }

  saveData(model: Student, isValid: boolean) {
    //var inputValues = { firstname: firstname.value, lastname: lastname.value, emailid: emailid.value, password: password.value, mobileno: mobileno.value };
    if (isValid) {
      this.students.push(this.student);
      localStorage.setItem("STUDENTS", JSON.stringify(this.students));
      this._router.navigate(['/students']);
      this.student = new Student();
    }
  }


}

