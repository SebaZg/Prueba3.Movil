import { Component } from '@angular/core';
import { FireStoreService } from '../servicio/fire-store.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public Bar =[
    {
      img:"https://th.bing.com/th/id/OIP.rW-6B4D_ef7Ek_O_bxF4WwHaEa?w=294&h=180&c=7&r=0&o=5&pid=1.7",

    }
  ]
  constructor() {}
}
