import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: any;
  complete = false;
  showString: string = '';

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      emailId: new FormControl(null, [Validators.required, Validators.email]),
      mobileNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
    });
  }

  submitData() {
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      alert(`Thank You ${this.registerForm.value.firstName}`);
      this.complete = true;
      this.showString = this.registerForm.status;
      this.registerForm.reset();
    }
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get emailId() {
    return this.registerForm.get('emailId');
  }

  get mobileNumber() {
    return this.registerForm.get('mobileNumber');
  }
}
