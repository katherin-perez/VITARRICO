import { Component, OnInit } from '@angular/core';
import { VitarricoService } from 'src/app/services/vitarrico.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  clientPathFlag: boolean = false;
  adminPathFlag: boolean =  false; 

  constructor(private vitarricoService: VitarricoService) { }

  ngOnInit(): void {
    this.vitarricoService.clientPathTrigger.subscribe(data => {
      this.clientPathFlag = data;
    });
    this.vitarricoService.adminPathTrigger.subscribe(data => {
      this.adminPathFlag = data;
    });
  }

  

}
