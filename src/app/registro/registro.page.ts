import { Component, OnInit } from '@angular/core';
import { Users } from '../interfaces';
import { FireStoreService } from '../servicio/fire-store.service';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  newUsers: Users = {
    nombre: '',
    edad: null,
    rut: '',
    direccion: '',
    correo: '',
    telefono: null,
    contrasena: '',
  };
  users: Users [] = [];
  
  constructor(public database: FireStoreService,public fb: FormBuilder,public alertController: AlertController, public navCtrl: NavController) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  async guardar(){
    var f = this.formularioRegistro.value;
    if( this.formularioRegistro.valid){
      this.navCtrl.navigateRoot('home')
    }else{(this.formularioRegistro.invalid)
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Se deben llenar todos los datos',
        buttons: ['Aceptar'],
        
      });
      await alert.present();
      return;
    }
    var usuario = {
      nombre: f.nombre,
      password: f.password
    }
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  ngOnInit() {
    this.getUsers();
  }

  save(){
    console.log('Esto vamos a guardar -->', this.newUsers );
    const data = this.newUsers;
    const Usuarios = 'Users';
    this.database.crearDocument<Users>(data, Usuarios);

  } 
  getUsers(){
    const enlace = 'Users';
    this.database.getCollectionChanges<Users>(enlace).subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }
  eliminarUsuario(id: string){
    this.database.eliminarDato('usuario', id)
  }
}