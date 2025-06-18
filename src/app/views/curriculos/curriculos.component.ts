import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss'],
})

// controller -> view -> model
export class CurriculosComponent implements OnInit {
  public curriculos: Curriculo[] = []; // vetor para armazenar as vagas do BD

  constructor(private _curriculosService: CurriculosService) {}
  // injeta o serviço de vagas dentro do componente

  ngOnInit(): void {
    this.listarCurriculos();
  }

  // função para listar as vagas
  listarCurriculos() {
    this._curriculosService.getCurriculos().subscribe(
      // subscribe é um método do Observable que permite recber dados e tratá-los para vetor
      (e) => {   // listar vaga por vaga dentro do vetor
        this.curriculos = e.map((curriculo) => {
          return Curriculo.fromMap(curriculo);
        });
      }
    );
  }
}
