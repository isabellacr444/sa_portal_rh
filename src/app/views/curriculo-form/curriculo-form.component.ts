import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculosService } from 'src/app/services/curriculos.service';
import { Curriculo } from 'src/app/models/curriculo.model';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss']
})
export class CurriculoFormComponent implements OnInit {
  curriculo: Curriculo = new Curriculo(0, '', '', '', '', '');
  isEditMode = false;

  constructor(
    private curriculosService: CurriculosService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.isEditMode = true;
      this.curriculosService.getCurriculoById(id).subscribe({
        next: (c) => {
          this.curriculo = Curriculo.fromMap(c);
        },
        error: () => {
          alert('Erro ao carregar currículo para edição.');
        }
      });
    }
  }

  salvar() {
    if (this.isEditMode) {
      this.curriculosService.putCurriculo(this.curriculo.id, this.curriculo).subscribe({
        next: () => {
          alert('Currículo atualizado com sucesso!');
          this.router.navigate(['/curriculo-list']);
        },
        error: () => {
          alert('Erro ao atualizar currículo.');
        }
      });
    } else {
      this.curriculosService.postCurriculo(this.curriculo).subscribe({
        next: () => {
          alert('Currículo criado com sucesso!');
          this.router.navigate(['/curriculo-list']);
        },
        error: () => {
          alert('Erro ao criar currículo.');
        }
      });
    }
  }
}
