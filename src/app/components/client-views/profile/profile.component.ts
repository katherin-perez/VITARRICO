import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VitarricoService } from 'src/app/services/vitarrico.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formUpdateInfoUser: FormGroup = new FormGroup({});
  dataUser:any;

  constructor(private formBuilder: FormBuilder, private vitarricoService:VitarricoService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.dataUser = this.vitarricoService.get('INFO USER');
    this.formUpdateInfoUser = this.formBuilder.group({
      name: [this.dataUser.user.name],
      last_name: [this.dataUser.user.last_name],
      mail: [this.dataUser.user.mail],
      password: [this.dataUser.user.password],
      document: [this.dataUser.user.document],
      phone: [this.dataUser.user.phone],
    });
  }

  updateInfoUser(event: Event) {
  }
}
