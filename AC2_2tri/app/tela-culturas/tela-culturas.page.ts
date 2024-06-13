import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-culturas',
  templateUrl: './tela-culturas.page.html',
  styleUrls: ['./tela-culturas.page.scss'],
})
export class TelaCulturasPage implements OnInit {

  frutas:any;
  mensagem:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.frutas = this.activatedRoute.snapshot.paramMap.get('frutas');
    this.mensagem = this.activatedRoute.snapshot.paramMap.get('mensagem')
  }

}
