import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  altura='';
  peso=0;
  radioSelecionada='';

  constructor(private alertController: AlertController) {}

  calcularPesoIdeal(){
    if(this.radioSelecionada=='m'){
      this.peso=72.7*parseFloat(this.altura)-58;
    }
    else{
      this.peso=62.1*parseFloat(this.altura)-47;
    }
    this.exibirAlerta();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'APP peso ideal',
      subHeader: 'Aqui vai o subtitulo',
      message: this.peso.toFixed(2),
      buttons: ['OK'],
    });

    await alert.present();
  }

}
