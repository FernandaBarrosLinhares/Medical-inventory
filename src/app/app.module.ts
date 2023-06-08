import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { CadastroConsultaComponent } from './pages/cadastro-consulta/cadastro-consulta.component';
import { CadastroExameComponent } from './pages/cadastro-exame/cadastro-exame.component';
import { ListagemProntuarioComponent } from './pages/listagem-prontuario/listagem-prontuario.component';
import { ProntuarioPacienteComponent } from './pages/prontuario-paciente/prontuario-paciente.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormularioCadastroComponent } from './pages/login/formulario-cadastro/formulario-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ToolbarComponent,
    HomeComponent,
    CadastroPacienteComponent,
    CadastroConsultaComponent,
    CadastroExameComponent,
    ListagemProntuarioComponent,
    ProntuarioPacienteComponent,
    FormularioCadastroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
