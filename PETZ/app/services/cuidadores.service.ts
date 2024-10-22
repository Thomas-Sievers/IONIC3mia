import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cuidadores } from '../models/cuidadores';

@Injectable({
  providedIn: 'root'
})
export class CuidadoresService {

  constructor(private afs: AngularFirestore) { } //afs em vez de Angular Firestore

  saveCuidadores(cuidador: Cuidadores){
    return this.afs.collection('cuidador').add({ ...cuidador });
  }

  searchCuidadores(){
    return this.afs.collection('cuidador').snapshotChanges();
  }

  searchById(id: string){
    //Doc só procura por um registro (pelo id) do banco
    return this.afs.collection('cuidador').doc(id).valueChanges();
  }

  changeCuidadores(cuidador: Cuidadores){
    return this.afs.collection('cuidador').doc(cuidador.id).update({ ...cuidador });
  }

  deleteCuidadores(id: string){
    return this.afs.doc('cuidador/' + id).delete();
  }
}