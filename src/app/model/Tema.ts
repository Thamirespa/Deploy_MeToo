import { Postagem } from "./Postagem";

export class Tema {
  public id: number;
  public forum: string;
  public publicacao: string;
  public postagem: Postagem[];
}