import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {
  tema: Tema = new Tema()
  listaTemas: Tema[]

  forum = environment.forum

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  idTema: number
  usuario: Usuario = new Usuario()
  foto = environment.foto
  nome = environment.nome
  idUsuario = environment.id

key = 'data'
reverse = true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService

  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente ')
      this.router.navigate(['/entrar'])
    }

    this.getAllTemas()
    this.getAllPostagens()
  }
  getAllTemas( ) {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })

  }


  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
    })


  }


}
