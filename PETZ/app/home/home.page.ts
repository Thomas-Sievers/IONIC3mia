import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { Animal } from '../models/animais';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
//Variável que armazena a lista de animais;
public animalList : Animal[] = [];

constructor(private aniService: AnimalService, private alertController: AlertController, private route: Router){}

ngOnInit(){
  this.searchAnimal();
}

switchCuidadores(){
  this.route.navigateByUrl('/cuidador')
}

searchAnimal(){
  //Chama o método, para reescrever e receber o retorno
  this.aniService.searchAnimal().subscribe(returnData => {
    //O retorno (register) é armazenado na variavel returnData
    this.animalList = returnData.map((register:any) => (
      {
        id: register.payload.doc.id, //Pega o id do registro no Firebase
        nome: register.payload.doc.data()['nome'],
        especie: register.payload.doc.data()['especie'],
        raca: register.payload.doc.data()['raca'],
        idade: register.payload.doc.data()['idade'],
        adicionais: register.payload.doc.data()['adicionais'],
      }
    ))
  })
}

async deleteAnimal(id:string){
  const alert = await this.alertController.create({
    header: 'Confirmar a exclusão deste animal?',
    buttons: [
      {
        text: 'Não',
        role: 'cancel',
        handler: () => {

        },
      },
      {
        text: 'Sim',
        role: 'confirm',
        handler: () => {
          this.aniService.deleteAnimal(id);
        },
      },
    ],
  });

  await alert.present();
  this.searchAnimal();
}
}
