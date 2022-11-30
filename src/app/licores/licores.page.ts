import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../servicio/api.service';

@Component({
  selector: 'app-licores',
  templateUrl: './licores.page.html',
  styleUrls: ['./licores.page.scss'],
})
export class LicoresPage {
getdata:any[]=[];
  constructor( public _services: ApiService, private router: Router) {

    this._services.getdata<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
   }
    )
  }

  
  logout(){
    // localStorage.clear();
    localStorage.removeItem('ingresado');
    this.router.navigate(['login'])

  }
}
