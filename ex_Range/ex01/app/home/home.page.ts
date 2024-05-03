import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valorRange = 0;
  valorConta = 0;
  valorGorjeta = 0;
  constructor( private alertController: AlertController) {}

  calcularGorjeta(){
    this.valorGorjeta = (this.valorConta/100)*this.valorRange;
    this.exibirAlerta()
  }

  onIonChange(ev:RangeCustomEvent){
    this.valorRange = parseInt(ev.detail.value.toString());
  }

  async exibirAlerta(){
    const alert = await this.alertController.create({
      header: 'APP calcular gorjeta',
      subHeader: '',
      message: "O valor da gorjeta é: " + this.valorGorjeta.toFixed(2),
      buttons: ["OK"],
    });
    await alert.present();
  }
}
