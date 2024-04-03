import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  total = 0;
  totalTaxado = 0;
  quilometragem = "";
  radioSelecionada = "";
  constructor(private alertController: AlertController) {}

  calcularPreco(){
    if(this.radioSelecionada == "normal"){
      this.total = (parseFloat(this.quilometragem)*2.50) + 5;
      if(this.total > 150){
        this.totalTaxado = this.total*0.80;
      }
      else{
        this.totalTaxado = this.total*0.75
      }
    }

    else if(this.radioSelecionada == "superior"){
      this.total = (parseFloat(this.quilometragem)*3.50) + 7,50;
      if(this.total > 150){
        this.totalTaxado = this.total*0.80;
      }
      else{
        this.totalTaxado = this.total*0.75
      }
    }

    else{
      this.total = (parseFloat(this.quilometragem)*5.50) + 10;
      if(this.total > 150){
        this.totalTaxado = this.total*0.80;
      }
      else{
        this.totalTaxado = this.total*0.75
      }
    }
    this.exibirAlerta()
  }

  async exibirAlerta(){
    const alert = await this.alertController.create({
      header: 'APP Peso Ideal',
      subHeader: '',
      message: `O total da sua corrida foi: ${this.totalTaxado.toFixed(1)}`,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
