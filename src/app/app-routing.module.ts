import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';

import { CurriculoFormComponent } from './views/curriculo-form/curriculo-form.component';
import { CurriculoListComponent } from './views/curriculo-list/curriculo-list.component';

import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';

// crio as rotas de navegação
const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"vagas", component: VagasComponent},
  {path:"curriculos", component: CurriculosComponent},

  {path:"curriculo-form", component: CurriculoFormComponent},
  {path:"curriculo-list", component: CurriculoListComponent},

  {path:"painel-vagas", component: PainelVagasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
