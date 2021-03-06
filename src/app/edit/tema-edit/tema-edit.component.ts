import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {
  tema: Tema = new Tema

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private temaService: TemaService
  ) { }


  ngOnInit() {

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
    let id: number = this.route.snapshot.params['id']
    this.findByTema(id)
  }

  findByTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  atualizarTema() {
    this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp;
      alert("tema atualizado com sucesso")
      this.router.navigate(['/tema'])
    })
  }

}
