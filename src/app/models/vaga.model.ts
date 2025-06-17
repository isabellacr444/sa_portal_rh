//& arquivo responsável pela modelagem de dados para vagas

export class Vaga {
  //*   atributos :
  //? private _id: number;
  //? private _nome: string;
  //? private _foto: string;
  //? private _descricao: string;
  //? private _salario: number;

  //*   métodos
  // construtor -> método da classe para criação de objetos
  //? constructor(id:number, nome: string, foto:string, descricao:string, salario:number){
  //?   this._id = id,
  //?   this._nome = nome,
  //?   this._foto = foto,
  //?   this._descricao = descricao,
  //?   this._salario = salario
  //? }

  // JS/TS há uma forma de declarar os atributos e já fazer o construtor tudo de uma vez
  constructor(
    private _id: number,
    private _nome: string,
    private _foto: string,
    private _descricao: string,
    private _salario: number
  ) {}

  // criar os métodos de acesso público (getters and setters)
  //*   id
  public get id(): number {
    return this._id;
  }
  public set id(v: number) {
    this._id = v;
  }

  //*   nome
  public get nome(): string {
    return this._nome;
  }
  public set nome(v: string) {
    this._nome = v;
  }

  //*   foto
  public get foto(): string {
    return this._foto;
  }
  public set foto(v: string) {
    this._foto = v;
  }

  //*   descrição
  public get descricao(): string {
    return this._descricao;
  }
  public set descricao(v: string) {
    this._descricao = v;
  }

  //*   salário
  public get salario(): number {
    return this._salario;
  }
  public set salario(v: number) {
    this._salario = v;
  }

  //& Métodos de conversão de objetos
  //* Obj => Json
  public toMap(): { [key: string]: any } {
    return {
      id: this._id,
      nome: this._nome,
      foto: this._foto,
      descricao: this._descricao,
      salario: this._salario,
    };
  }
  //Json => Obj
  static fromMap(map: any): Vaga {
    return new Vaga(map.id, map.nome, map.foto, map.descricao, map.salario);
  }
}
