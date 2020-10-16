import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefasComponent } from './view/tarefas/tarefas.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ClientesComponent } from './view/clientes/clientes.component';
import { LeadsComponent } from './view/leads/leads.component';
import { PipelineComponent } from './view/pipeline/pipeline.component';
import { NpsComponent } from './view/nps/nps.component';
import { RankingComponent } from './view/ranking/ranking.component';


const routes: Routes = [
    {path: '', component: TarefasComponent },
    {path: 'dashboard', component: DashboardComponent },
    {path: 'clientes', component: ClientesComponent },
    {path: 'leads', component: LeadsComponent },
    {path: 'pipeline', component: PipelineComponent },
    {path: 'nps', component: NpsComponent },
    {path: 'ranking', component: RankingComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }