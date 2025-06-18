import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit {
  public vaga: Vaga = new Vaga(0, '', '', '', 0);
  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) {}

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(): void {
    this._vagasService.getVagas().subscribe(
      (resposta) => {
        this.vagas = resposta.map((item) => Vaga.fromMap(item));
      },
      (erro) => {
        alert('Erro ao listar vagas: ' + erro);
      }
    );
  }

  listarVagaPorId(vaga: Vaga): void {
    this.vaga = new Vaga(
      vaga.id,
      vaga.nome,
      vaga.foto,
      vaga.descricao,
      vaga.salario
    );
  }

  cadastrarVaga(): void {
    this._vagasService.postVaga(this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
      },
      (erro) => {
        alert('Erro ao cadastrar vaga: ' + erro);
      }
    );
  }

  atualizarVaga(id: number): void {
    this._vagasService.putVaga(id, this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas();
      },
      (erro) => {
        alert('Erro ao atualizar vaga: ' + erro);
      }
    );
  }

  excluirVaga(id: any): void {
    if (confirm('Tem certeza que deseja excluir esta vaga?')) {
      this._vagasService.deleteVaga(id).subscribe(
        () => {
          this.vaga = new Vaga(0, '', '', '', 0);
          this.listarVagas();
        },
        (erro) => {
          alert('Erro ao excluir vaga: ' + erro);
        }
      );
    }
  }
}
