
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/template/header/header.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { TarefasComponent } from './view/tarefas/tarefas.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ClientesComponent } from './view/clientes/clientes.component';
import { LeadsComponent } from './view/leads/leads.component';
import { PipelineComponent } from './view/pipeline/pipeline.component';
import { NpsComponent } from './view/nps/nps.component';
import { RankingComponent } from './view/ranking/ranking.component';
import { ToggleMenuComponent } from './components/template/toggle-menu/toggle-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    TarefasComponent,
    DashboardComponent,
    ClientesComponent,
    LeadsComponent,
    PipelineComponent,
    NpsComponent,
    RankingComponent,
    ToggleMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
