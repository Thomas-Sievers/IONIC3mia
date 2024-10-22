import { Component, OnInit } from '@angular/core';
import { Cuidadores } from 'src/app/models/cuidadores';
import { CuidadoresService } from 'src/app/services/cuidadores.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuidador',
  templateUrl: './cuidador.page.html',
  styleUrls: ['./cuidador.page.scss'],
})
export class CuidadorPage implements OnInit {

  public cuidadoresList : Cuidadores[] = [];

  constructor(private cuiService: CuidadoresService, private alertController: AlertController, private route: Router) { }

  ngOnInit() {
    this.searchCuidador();
  }

  switchAnimais(){
    this.route.navigateByUrl('/')
  }

  searchCuidador(){
    this.cuiService.searchCuidadores().subscribe(returnData => {
      this.cuidadoresList = returnData.map((register:any) => (
        {
          id: register.payload.doc.id, //Pega o id do registro no Firebase
          nome: register.payload.doc.data()['nome'],
          telefone: register.payload.doc.data()['telefone'],
          experiencia: register.payload.doc.data()['experiencia'],
          especialidade: register.payload.doc.data()['especialidade'],
        }
      ))
    })
  }

  async deleteCuidador(id:string){
    const alert = await this.alertController.create({
      header: 'Confirmar a exclusão deste cuidador?',
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
            this.cuiService.deleteCuidadores(id);
          },
        },
      ],
    });
  
    await alert.present();
    this.searchCuidador();
  }

}
