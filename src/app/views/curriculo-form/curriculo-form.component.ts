import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss'],
})
export class CurriculoFormComponent implements OnInit {
  public curriculo: Curriculo = new Curriculo(0, '', '', '', '',''); 
  public curriculos: Curriculo[] = [];

  constructor(private _curriculosService: CurriculosService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

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
