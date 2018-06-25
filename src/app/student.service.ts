import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';

//import {LoginParams} from './logindetails/Service.login';
 
@Injectable()
export class StudentService {

    constructor(private http: Http) {}
    addData(data)
    {
        return this.http.post('http://ec2-54-186-106-248.us-west-2.compute.amazonaws.com/niriks/api/v1/user/login',data);
       
    }
    
  /* signIn = function(data)  {
        let headers = new Headers(
                { 
                    'Content-Type': 'application/json'
                });
        let options = new RequestOptions({ headers: headers,  });
        return this.http.post('http://ec2-54-186-106-248.us-west-2.compute.amazonaws.com/niriks/api/v1/user/login', data, options);
    }
    //private api='http://ec2-54-186-106-248.us-west-2.compute.amazonaws.com/niriks/api/v1/user/login';
    */
  
    
}
