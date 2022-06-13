import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formSignUp: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  public buildForm() {
    this.formSignUp = this.formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      document: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', [Validators.required]],
    });

    this.formSignUp.valid;
    this.formSignUp.invalid;
  }

  signUp(event: Event) {
    event.preventDefault();
    const value = this.formSignUp.value;
    console.log(value);
    if (this.formSignUp.valid) {
      axios.post('http://127.0.0.1:3000/signup', value)
      .then((result) => {
        console.log(result.data);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}
