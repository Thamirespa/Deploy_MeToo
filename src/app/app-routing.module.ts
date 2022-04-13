import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AberturaComponent } from './abertura/abertura.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path: '', redirectTo: 'abertura', pathMatch: 'full'},
  
  {path: 'menu', component: MenuComponent},
  {path: 'entrar', component: EntrarComponent},

  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'pagina-inicial', component: PaginaInicialComponent},
  {path: 'rodape', component: RodapeComponent},

  {path: 'tema-edit/:id', component: TemaEditComponent },
  {path: 'tema-delete/:id', component: TemaDeleteComponent },
  {path: 'tema', component: TemaComponent},
 

  {path: 'postagem-delete/:id', component: PostagemDeleteComponent },
  {path: 'postagem-edit/:id', component: PostagemEditComponent },
 

  {path: 'usuario-edit/:id', component: UsuarioEditComponent },
 
  {path: 'abertura', component: AberturaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
