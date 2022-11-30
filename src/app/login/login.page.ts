import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicio/auth.service';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { AlertController, IonProgressBar, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  Users={
    correo: null,
    contrasena: null
  }
  constructor(private auth:AuthService,public fb:FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,) { 
    
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }
  async ingresar(){
    var f = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('home');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Datos ingresados incorrectos',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
  async login(){
    console.log('credenciales ->', this.Users);
    const res = await  this.auth.login(this.Users.correo, this.Users.contrasena)
    if (res) {
      console.log('res ->', res);
    }

  }
}