import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePassword : FormGroup;
  submitted  = false;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.changePassword = this.formBuilder.group(
      {
        password : ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
        confirmPassword: ['', [Validators.required]]
      }
    )
  }
  get form() { 
    return this.changePassword.controls; 
  }
  onSubmit() {
    this.submitted = true;
    if (this.changePassword.invalid) {
      return;
    }
    alert('SUCCESS!!');
  }

}
