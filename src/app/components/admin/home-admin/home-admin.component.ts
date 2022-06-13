import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  openProducsAdminRoute(){
    this.router.navigateByUrl('/products-admin');
  }

  openOrdersRoute(){
    this.router.navigateByUrl('/orders-admin');
  }

  openClientsAdminRoute(){
    this.router.navigateByUrl('/clients-admin');
  }

  openProvidersRoute(){
    this.router.navigateByUrl('/providers-admin');
  }
}
