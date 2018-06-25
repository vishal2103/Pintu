import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { StudentService } from './student.service';
import { RegistrationComponent } from './registration/registration.component';
import { StudentsComponent } from './students/students.component';
import { EditStudentDetailComponent } from './edit-student-detail/edit-student-detail.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';



const appRoutes: Routes = [
  {
    path: 'new-registration',
    component: RegistrationComponent
  },
  {
    path: 'students/edit/:index',
    component: EditStudentDetailComponent
  },
  {
    path: '',
    component: StudentsComponent
  },
  {
  path:'login',
  component:LoginpageComponent
  },
  {
   path:'display',
   component:DisplaydetailsComponent
  },
  
];


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EditStudentDetailComponent,
    StudentsComponent,
    LoginpageComponent,
    DisplaydetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
