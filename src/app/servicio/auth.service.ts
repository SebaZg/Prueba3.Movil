import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth) { }

  login(correo: string, contrasena:string){
    return this.authfirebase.signInWithEmailAndPassword(correo, contrasena)
  }
}
