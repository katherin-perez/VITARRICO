import { Component, OnInit } from '@angular/core';
import { VitarricoService } from 'src/app/services/vitarrico.service';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css']
})
export class ShoppingCarComponent implements OnInit {

  dataUser:any;
  token:any;

  constructor(private vitarricoService: VitarricoService) {
    this.dataUser = vitarricoService.get('INFO USER');
    this.token = vitarricoService.get('TOKEN');
  }

  ngOnInit(): void {
  }

}
