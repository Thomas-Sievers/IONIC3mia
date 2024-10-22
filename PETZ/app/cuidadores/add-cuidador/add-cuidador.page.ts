import { Component, OnInit } from '@angular/core';
import { CuidadoresService } from 'src/app/services/cuidadores.service';
import { Cuidadores } from 'src/app/models/cuidadores';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cuidador',
  templateUrl: './add-cuidador.page.html',
  styleUrls: ['./add-cuidador.page.scss'],
})
export class AddCuidadorPage implements OnInit {

  cuidador: Cuidadores = new Cuidadores();

  constructor(private cuiService: CuidadoresService, private route: Router) { }

  ngOnInit() {
  }

  save(){
    this.cuiService.saveCuidadores(this.cuidador);
    this.route.navigateByUrl('/cuidador');
  }

}
