import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss'],
})
export class CurriculoFormComponent implements OnInit {
  public curriculo: Curriculo = new Curriculo(0, '', '', '', '', '');
  public curriculos: Curriculo[] = [];

  constructor(private _curriculosService: CurriculosService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos(): void {
    this._curriculosService.getCurriculos().subscribe(
      (resposta) => {
        this.curriculos = resposta.map((item) => Curriculo.fromMap(item));
      },
      (erro) => {
        alert('Erro ao listar currículos: ' + erro);
      }
    );
  }

  listarCurriculoPorId(curriculo: Curriculo): void {
    this.curriculo = new Curriculo(
      curriculo.id,
      curriculo.nome,
      curriculo.formacao,
      curriculo.experiencia,
      curriculo.habilidades,
      curriculo.linkedin
    );
  }


  cadastrarCurriculo(): void {
    this._curriculosService.postCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', '', '');
        this.listarCurriculos();
      },
      (erro) => {
        alert('Erro ao cadastrar currículo: ' + erro);
      }
    );
  }

  atualizarCurriculo(id: number): void {
    this._curriculosService.putCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', '', '');
        this.listarCurriculos();
      },
      (erro) => {
        alert('Erro ao atualizar currículo: ' + erro);
      }
    );
  }

  excluirCurriculo(id: any): void {
    if (confirm('Tem certeza que deseja excluir este currículo?')) {
      this._curriculosService.deleteCurriculo(id).subscribe(
        () => {
          this.curriculo = new Curriculo(0, '', '', '', '', '');
          this.listarCurriculos();
        },
        (erro) => {
          alert('Erro ao excluir currículo: ' + erro);
        }
      );
    }
  }
}