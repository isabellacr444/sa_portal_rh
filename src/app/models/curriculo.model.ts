//& arquivo responsável pela modelagem de dados para curriculos

export class Curriculo {
  //*   atributos :
  //? public id: number;
  //? public nome: string;
  //? public formacao: string;
  //? public experiencia: string;
  //? public habilidades: string;
  //? public linkedin: string;

  //*   métodos
  // construtor -> método da classe para criação de objetos
  constructor(
    public id: number,
    public nome: string,
    public formacao: string,
    public experiencia: string,
    public habilidades: string,
    public linkedin: string
  ) {}

  //& Métodos de conversão de objetos
  //* Obj => Json
  public toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      formacao: this.formacao,
      experiencia: this.experiencia,
      habilidades: this.habilidades,
      linkedin: this.linkedin,
    };
  }

  //* Json => Obj
  static fromMap(map: any): Curriculo {
    return new Curriculo(
      Number(map.id),
      map.nome,
      map.formacao,
      map.experiencia,
      map.habilidades,
      map.linkedin
    );
  }
}