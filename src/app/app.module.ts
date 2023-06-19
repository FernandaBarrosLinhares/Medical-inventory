import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { CadastroConsultaComponent } from './pages/cadastro-consulta/cadastro-consulta.component';
import { CadastroExameComponent } from './pages/cadastro-exame/cadastro-exame.component';
import { ListagemProntuarioComponent } from './pages/listagem-prontuario/listagem-prontuario.component';
import { ProntuarioPacienteComponent } from './pages/prontuario-paciente/prontuario-paciente.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { FormularioCadastroComponent } from './components/formulario-cadastro/formulario-cadastro.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    HomeComponent,
    CadastroPacienteComponent,
    CadastroConsultaComponent,
    CadastroExameComponent,
    ListagemProntuarioComponent,
    ProntuarioPacienteComponent,
    LoginComponent,
    FormularioCadastroComponent,
    ModalComponent,
    CardComponent,
    FormularioLoginComponent,
    DirectivesComponent,
    IfRenderComponent,
    ListRenderComponent,




  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,







  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
