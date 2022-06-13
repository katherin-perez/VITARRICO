import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { VitarricoService } from 'src/app/services/vitarrico.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formSignIn: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, public router: Router, private vitarricoService: VitarricoService) {
    this.buildForm();
  }

  private buildForm() {
    this.formSignIn = this.formBuilder.group({
      mail: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.formSignIn.valid;
    this.formSignIn.invalid;
  }

  singIn(event: Event){
    event.preventDefault();
    const value = this.formSignIn.value;
    if (this.formSignIn.valid) {
      axios.post('http://127.0.0.1:3000/signin', value)
        .then((result) => {
          this.vitarricoService.set('TOKEN', result.data.token);
          this.vitarricoService.set('INFO USER', result.data);
          this.vitarricoService.clientPathTrigger.emit({data:true});
          console.log(result.data.user.roles[1].name);
          if(result.data.user.roles[1].name === "Administrator"){
            this.vitarricoService.adminPathTrigger.emit({data:true});
            this.router.navigateByUrl('/home-admin');
          }else{
            this.router.navigateByUrl('/');
          }
        }).catch((err) => {
          console.log(err);
        });
    }
  }

  ngOnInit(): void {
  }

}
