import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: '',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },

    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: '',
      generos: ['Aventura', 'Ficção Científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    }
  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],navigationExtras)
  }

  async exibirAlertaFavorito(filme: IFilme){
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favorito o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            filme.favorito=false; 
          }
        },
        {
          text: 'Sim, favoritar',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionando aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
