import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  radioSelecionadaPeso = '';
  radioSelecionadaAltura = '';
  peso = 0;
  altura = 0;
  classificacao = '';
  imc = 0;
  valorRangePeso = 0;
  valorRangeAltura = 0;
  constructor(private alertController: AlertController) {}

  calcularIMC(){
    if(this.radioSelecionadaPeso == 'libras'){
      this.peso = this.valorRangePeso/2.2;
    }
    else if(this.radioSelecionadaAltura == 'centimetro'){
      this.altura = this.valorRangeAltura*100;
    }
    else{
      this.peso = this.valorRangePeso;
      this.altura = this.valorRangeAltura/100;
    }

    this.imc = this.peso/(this.altura*this.altura);

    if(this.imc <= 16.9){
      this.classificacao = 'muito abaixo do peso';
    }
    else if(this.imc >= 17 && this.imc <=18.4){
      this.classificacao = 'abaixo do peso'
    }
    else if(this.imc >= 18.5 && this.imc <=24.9){
      this.classificacao = 'normal'
    }
    else if(this.imc >=25 && this.imc <=29.9){
      this.classificacao = 'acima do peso'
    }
    this.exibirAlerta()
  }


  pinFormatter(value: number) {
    return `${value}`;
  }

  onIonChangePeso(ev: RangeCustomEvent){
    this.valorRangePeso = parseInt(ev.detail.value.toString());
  }

  onIonChangeAltura(ev: RangeCustomEvent){
    this.valorRangeAltura = parseInt(ev.detail.value.toString());
  }

  async exibirAlerta(){
    const alert = await this.alertController.create({
      header: 'APP calcular IMC',
      subHeader: "",
      message: `Você está pesando ${this.peso.toFixed(1)}Kg e tem ${this.altura}m, o valor do seu IMC é ${this.imc.toFixed(1)}, te deixando ${this.classificacao}`,
      buttons: ['OK']
    })
    await alert.present();
  }
}
