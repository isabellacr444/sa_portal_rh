import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss'],
})
export class CurriculoFormComponent implements OnInit {
  //* atributos
  public curriculo: Curriculo = new Curriculo(0, '', '', '', '',''); // rastrear os dados do formulário por interpolação {{}}
  public curriculos: Curriculo[] = [];
   // vetor para armazenar os curriculos do BD

  //* construtor
  constructor(private _curriculosService: CurriculosService) {} // aplicando o service no construtor

  //* método onInit
  ngOnInit(): void {
    this.listarCurriculos();
  }

  //* 4 métodos para o crud
  listarCurriculos(): void {
    this._curriculosService.getCurriculos().subscribe(
      (e) => {
        this.curriculos = e.map((curriculo) => Curriculo.fromMap(curriculo));
      },
      (error) => {
        alert('Erro ao Listar Curriculos: ' + error);
      }
    );
  }

  // listar Curriculo por ID
  listarCurriculoPorId(id: any): void {
    this.curriculo = this.curriculo;
  }

  cadastrarCurriculo(): void {
    this._curriculosService.postCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', '','');
        this.listarCurriculos();
      },
      (error) => {
        alert('Erro ao cadastrar curriculo: ' + error);
      }
    );
  }

  atualizarCurriculo(id: any): void {
    this._curriculosService.putCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', '','');
        this.listarCurriculos();
      },
      (error) => {
        alert('Erro ao atualizar curriculo: ' + error);
      }
    );
  }

  excluirCurriculo(id: any): void {
    this._curriculosService.deleteCurriculo(id).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', '','');
        this.listarCurriculos();
      },
      (error) => {
        alert('Erro ao deletar curriculo: ' + error);
      }
    );
  }
}
