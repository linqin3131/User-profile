import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  form = this.fb.group({
    username: ['', [
      Validators.email,
      Validators.required
    ]],
    password: ['',[
      Validators.required,
      Validators.minLength(6)
    ]],
  })

  get username () {
    return this.form.get('username');
  }
  get password () {
    return this.form.get('password');
  }

  onSubmit() {
     console.log(this.form.value);
    }

  constructor(private fb: FormBuilder) { }

  }

