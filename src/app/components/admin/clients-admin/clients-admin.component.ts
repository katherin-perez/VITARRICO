import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import axios from 'axios';
import { VitarricoService } from 'src/app/services/vitarrico.service';

@Component({
  selector: 'app-clients-admin',
  templateUrl: './clients-admin.component.html',
  styleUrls: ['./clients-admin.component.css']
})
export class ClientsAdminComponent implements OnInit {

  formUpdateInfoUser: FormGroup = new FormGroup({});
  dataUser:any;
  USERS: any;
  createUserFlag: boolean = false;

  constructor(private formBuilder: FormBuilder, private vitarricoService:VitarricoService) {
    this.buildForm();
  }

  ngOnInit(): void {
    axios.get('http://127.0.0.1:3000/users')
      .then((response) => {
        this.USERS = response.data;
        console.log(this.USERS);
      }).catch((error) => {
        console.log(error);
      })
  }

  private buildForm() {
    this.formUpdateInfoUser = this.formBuilder.group({
      name: [""],
      last_name: [""],
      mail: [""],
      password: [""],
      document: [""],
      phone: [""],
    });
  }

  newUser(){
    this.createUserFlag = true;
  }

  createUser(){
    this.createUserFlag = false;
  }

  showUserDetails(id: string){
    let userId = this.USERS[0]._id;
    let cont = 1;
    while(userId !== id){
      userId = this.USERS[cont]._id;
      cont++;
    }
    console.log(userId)
  }

  async deleteUser(id: string) {
    console.log(id)
    const response = await axios.delete(`http://127.0.0.1:3000/user/${id}`,
    {
      headers: {
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzU4NjlmMTY2MjgwNjdkOGRmMDljMiIsImlhdCI6MTY1NTA1OTEyMiwiZXhwIjoxNjU1MTQ1NTIyfQ.LSRKZEEB6xVjkL-bK2T8w-htOZYezCQlAW1gGy5Slac'
      }
    });
    console.log(response.data)
  }

  updateInfoClient(){
    console.log("Editando...");
  }

}
