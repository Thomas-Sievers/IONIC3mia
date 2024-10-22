import { Component, OnInit } from '@angular/core';
import { Cuidadores } from 'src/app/models/cuidadores';
import { CuidadoresService } from 'src/app/services/cuidadores.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-cuidador',
  templateUrl: './change-cuidador.page.html',
  styleUrls: ['./change-cuidador.page.scss'],
})
export class ChangeCuidadorPage implements OnInit {

  cuidador: Cuidadores = new Cuidadores()

  constructor(private cuiService: CuidadoresService, private route: Router, private ActivedRoute: ActivatedRoute)
  { this.cuidador.id = this.ActivedRoute.snapshot.params['id']}

  ngOnInit() {
    this.cuiService.searchById(this.cuidador.id).subscribe((data:any) => {
      this.cuidador.nome = data['nome'];
      this.cuidador.telefone = data['telefone'];
      this.cuidador.experiencia = data['experiencia'];
      this.cuidador.especialidade = data['especialidade'];
    });
  }

  save(){
    this.cuiService.changeCuidadores(this.cuidador)
    this.route.navigateByUrl('/cuidador')
  };

}
