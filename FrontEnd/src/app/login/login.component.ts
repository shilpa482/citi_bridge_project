import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }
    loginProcess() {
      if(this.formGroup.valid) {
        this.authService.logIn(this.formGroup.value).subscribe(res => {
          if(res.success) {
            console.log(res);
            alert(res.message);
          }
          else {
            alert(res.message);
          }
        });
      }
    }  

}

  // submitUser() {
  //   console.log(JSON.stringify(this.user));
  //   console.log("login initiated!");
  // }

// function loginProcess() {
//   throw new Error('Function not implemented.');
// }

