import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string = '';
  email: string = '';
  note: string = '';
  secretKey: string = '';
  encryptedName: string = '';
  encryptedEmail: string = '';
  encryptedNote: string = '';

  constructor(public router: Router) {}

  encrypt(){
    if(this.name && this.email && this.note && this.secretKey){
      const encryptName = CryptoJS.AES.encrypt(this.name, this.secretKey).toString();
      const encryptEmail = CryptoJS.AES.encrypt(this.email, this.secretKey).toString();
      const encryptNote = CryptoJS.AES.encrypt(this.note, this.secretKey).toString();

      this.encryptedName = encryptName;
      this.encryptedEmail = encryptEmail;
      this.encryptedNote = encryptNote;

      this.router.navigateByUrl(`resultado/${this.encryptedName}/${this.encryptedEmail}/${this.encryptedNote}/${this.secretKey}`)
    }
  }
}
