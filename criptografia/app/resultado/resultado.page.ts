import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  name: string = '';
  email: string = '';
  note: string = '';
  secretKey: any;
  encryptedName: any;
  encryptedEmail: any;
  encryptedNote: any;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.encryptedName = this.activedRoute.snapshot.paramMap.get('encryptedName');
    this.encryptedEmail = this.activedRoute.snapshot.paramMap.get('encryptedEmail');
    this.encryptedNote = this.activedRoute.snapshot.paramMap.get('encryptedNote');
    this.secretKey = this.activedRoute.snapshot.paramMap.get('secretKey')
  }

  descript(){
    const bytes1 = CryptoJS.AES.decrypt(this.encryptedName, this.secretKey);
    const bytes2 = CryptoJS.AES.decrypt(this.encryptedEmail, this.secretKey);
    const bytes3 = CryptoJS.AES.decrypt(this.encryptedNote, this.secretKey);

    const descriptedName = bytes1.toString(CryptoJS.enc.Utf8);
    const descriptedEmail = bytes2.toString(CryptoJS.enc.Utf8);
    const descriptedNote = bytes3.toString(CryptoJS.enc.Utf8);

    this.name = descriptedName;
    this.email = descriptedEmail;
    this.note = descriptedNote
  }

}
