import { Component, OnInit } from '@angular/core';
import { Users } from '../interface/Users';
import { PostmethodService } from '../services/postmethod.service';
import { NgForm } from '@angular/forms';
import { ApiResponse } from '../models/ApiResponse';
import { RequestModel } from '../interface/RequestModel';
import { ResponseModel } from '../interface/ResponseModel';
import { TabVisibilityService } from '../services/tab-visibility.service';
import { RegisterUsers } from '../interface/RegisterUsers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {


  users: RegisterUsers = new RegisterUsers();
  repeatPassword = '';
  passwordMismatch = false;
  showPassField: { [key: string]: boolean } = {};
  constructor(private postservice: PostmethodService, private tab: TabVisibilityService) {

  }

  ngOnInit(): void {
    this.tab.setVisibility(false);
  }

  showPass(id: string) {
    this.showPassField[id] = !this.showPassField[id];
  }
  
  authenticateInput(users: RegisterUsers) {
    let message: string = "";
    if (users.firstname === '' || users.firstname == null) {
      this.postservice.focusAndScrollToElement('firstname');
      console.log(message);
    } else if (users.lastname === '' || users.lastname == null) {
      this.postservice.focusAndScrollToElement('lastname');
      message = "Please enter your lastname";
    } else if (users.email === '' || users.email == null) {
      this.postservice.focusAndScrollToElement('email');
      message = "Please enter your email";
    } else if (users.mobilenumber === '' || users.mobilenumber == null) {
      this.postservice.focusAndScrollToElement('mobilenumber');
      message = "Please enter your mobilenumber";
    } else if (users.password === '' || users.password == null) {
      this.postservice.focusAndScrollToElement('password');
      message = "Please enter your password";
    } else if (users.repeatPassword === '' || users.repeatPassword == null) {
      this.postservice.focusAndScrollToElement('repeat-password');
      message = "Please enter  repeat password";
    } else if (users.password != users.repeatPassword) {
      message = "Password should be same"
    }
    return message;
  }

  async handleCreateUser(form: NgForm) {
    const value = form.value;
    const userobj: RegisterUsers = new RegisterUsers;
    const requestModel: RequestModel = new RequestModel;
    userobj.firstname = value.firstname;
    userobj.firstname = value.firstname;
    userobj.lastname = value.lastname;
    userobj.email = value.email;
    userobj.mobilenumber = value.mobilenumber;
    userobj.password = value.password;
    requestModel.reqObject = userobj;

    let authenticate: string = this.authenticateInput(this.users);
    if (!!authenticate) {
      console.log(authenticate);
      return;
    }
    console.log("data ::: " + JSON.stringify(this.users));
    let apiResponse: ApiResponse = await this.postservice.apiCalls(requestModel, 'registeruser');
    console.log("apiResponse ::: " + JSON.stringify(apiResponse))
    if (apiResponse.status == 0) {
      const responseResult: ResponseModel = apiResponse.data;

      if (responseResult.statusCode == 0) {
        console.log(responseResult.message);
        form.reset();  // Reset the form after successful registration
        // this.users = {}; // Optionally clear the users object
      } else {
        console.log(responseResult.message);
      }
    } else {
      console.log("data ::: " + JSON.stringify(apiResponse));
    }
  }
}
