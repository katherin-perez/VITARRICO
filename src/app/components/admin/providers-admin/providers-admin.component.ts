import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { VitarricoService } from 'src/app/services/vitarrico.service';

@Component({
  selector: 'app-providers-admin',
  templateUrl: './providers-admin.component.html',
  styleUrls: ['./providers-admin.component.css']
})
export class ProvidersAdminComponent implements OnInit {

  formUpdateInfoUser: FormGroup = new FormGroup({});
  dataUser:any;
  PROVIDERS: any;
  createProviderFlag: boolean = false;
 
  constructor(private formBuilder: FormBuilder, private vitarricoService:VitarricoService) {
    this.buildForm();
  }

  ngOnInit(): void {
    axios.get('http://127.0.0.1:3000/providers',
    {
      headers: {
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzU4NjlmMTY2MjgwNjdkOGRmMDljMiIsImlhdCI6MTY1NTA1OTEyMiwiZXhwIjoxNjU1MTQ1NTIyfQ.LSRKZEEB6xVjkL-bK2T8w-htOZYezCQlAW1gGy5Slac'
      }
    })
      .then((response) => {
        this.PROVIDERS = response.data;
        console.log(this.PROVIDERS);
      }).catch((error) => {
        console.log(error);
      })
  }

  private buildForm() {
    this.dataUser = this.vitarricoService.get('INFO USER');
    this.formUpdateInfoUser = this.formBuilder.group({
      name: [''],
      category: [''],
      products: [''],
      direction: [''],
      phone: [''],
      mail: ['', [Validators.email]]
    });
  }

  newProvider(){
    this.createProviderFlag = true;
  }

  createProvider(){
    this.createProviderFlag = false;
  }

  showProviderDetails(){
  }

  async deleteProvider(id: string) {
    const response = await axios.delete(`http://127.0.0.1:3000/provider/${id}`,
    {
      headers: {
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzU4NjlmMTY2MjgwNjdkOGRmMDljMiIsImlhdCI6MTY1NTA1OTEyMiwiZXhwIjoxNjU1MTQ1NTIyfQ.LSRKZEEB6xVjkL-bK2T8w-htOZYezCQlAW1gGy5Slac'
      }
    });
    console.log(response.data)
  }

  updateProvider(){
  }

}
