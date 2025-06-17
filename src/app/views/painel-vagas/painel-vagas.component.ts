import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit {
  //* atributos
  public vaga: Vaga = new Vaga(0, '', '', '', 0); // rastrear os dados do formulário por interpolação {{}}
  public vagas: Vaga[] = []; // vetor para armazenar as vagas do BD

  //* construtor
  constructor(private _vagasService: VagasService) {} // aplicando o service no construtor

  //* método onInit
  ngOnInit(): void {
    this.listarVagas();
  }

  //* 4 métodos para o crud
  listarVagas(): void {
    this._vagasService.getVagas().subscribe(
      (e) => {
        this.vagas = e.map((vaga) => Vaga.fromMap(vaga));
      },
      (error) => {
        console.error('Erro ao Listar Vagas: ', error);
      }
    );
  }

  // listar Vaga por ID
  listarVagaPorId(id: any): void {
    this.vaga = this.vaga;
  }

  cadastrarVaga(): void {
    this._vagasService.postVaga(this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
      },
      (error) => {
        console.error('Erro ao cadastrar vaga: ', error);
      }
    );
  }

  atualizarVaga(id: any): void {
    this._vagasService.putVaga(id, this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
      },
      (error) => {
        console.error('Erro ao atualizar vaga: ', error);
      }
    );
  }

  excluirVaga(id: any): void {
    this._vagasService.deleteVaga(id).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
      },
      (error) => {
        console.error('Erro ao deletar vaga: ', error);
      }
    );
  }
}
