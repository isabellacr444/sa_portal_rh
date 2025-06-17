//& arquivo responsável pela modelagem de dados para curriculos

export class Curriculo {
  constructor(
    private _id: number,
    private _nome: string,
    private _formacao: string,
    private _experiencia: string,
    private _habilidades: string,
    private _linkedin: string
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

  //*   formação
  public get formacao(): string {
    return this._formacao;
  }
  public set formacao(v: string) {
    this._formacao = v;
  }

  //*   experiência
  public get experiencia(): string {
    return this._experiencia;
  }
  public set experiencia(v: string) {
    this._experiencia = v;
  }

  //*   habilidades
  public get habilidades(): string {
    return this._habilidades;
  }
  public set habilidades(v: string) {
    this._habilidades = v;
  }

  //*   linkedin
  public get linkedin(): string {
    return this._linkedin;
  }
  public set linkedin(v: string) {
    this._linkedin = v;
  }

  //& Métodos de conversão de objetos
  //* Obj => Json
  public toMap(): { [key: string]: any } {
    return {
      id: this._id,
      nome: this._nome,
      formacao: this._formacao,
      experiencia: this._experiencia,
      habilidades: this._habilidades,
      linkedin: this._linkedin,
    };
  }
  //Json => Obj
  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.nome,
      map.formacao,
      map.experiencia,
      map.habilidades,
      map.linkedin
    );
  }
}
