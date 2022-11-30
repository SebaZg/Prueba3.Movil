import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument,
AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor( public Firestore:AngularFirestore) { }

  crearDocument<tipo>(data: tipo, Usuarios:string){
   const ref = this.Firestore.collection<tipo>(Usuarios);
   return ref.add(data);
  }

  eliminarDato(Users: string, id: string) {
    const collection = this.Firestore.collection(Users);
    return collection.doc(id).delete();
  }
  getCollectionChanges<tipo>(Usuarios: string){
    const ref = this.Firestore.collection<tipo>(Usuarios);
    return ref.valueChanges();
  }
  editDocument(){

  }
}