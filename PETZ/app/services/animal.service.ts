import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Animal } from '../models/animais';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private afs: AngularFirestore) { } //afs em vez de Angular Firestore

  saveAnimal(animal: Animal){
    return this.afs.collection('animais').add({ ...animal });
  }

  searchAnimal(){
    return this.afs.collection('animais').snapshotChanges();
  }

  searchById(id: string){
    //Doc só procura por um registro (pelo id) do banco
    return this.afs.collection('animais').doc(id).valueChanges();
  }

  changeAnimal(animal: Animal){
    return this.afs.collection('animais').doc(animal.id).update({ ...animal });
  }

  deleteAnimal(id: string){
    return this.afs.doc('animais/' + id).delete();
  }
}
