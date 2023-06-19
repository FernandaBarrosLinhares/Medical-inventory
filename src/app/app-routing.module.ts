import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { CadastroPacienteComponent } from "./pages/cadastro-paciente/cadastro-paciente.component";
import { ListagemProntuarioComponent } from "./pages/listagem-prontuario/listagem-prontuario.component";
import { ProntuarioPacienteComponent } from "./pages/prontuario-paciente/prontuario-paciente.component";
import { CadastroExameComponent } from "./pages/cadastro-exame/cadastro-exame.component";
import { CadastroConsultaComponent } from "./pages/cadastro-consulta/cadastro-consulta.component";
import { rotasGuard } from "./rotas.guard";





const routes: Routes = [

  //Criacão de rotas das aplicacao e guarda de rotas
    {path:'', pathMatch: 'full', redirectTo: 'home'},



    {
        path: 'login',
        component: LoginComponent

    },

    {
        path: 'home',
        component: HomeComponent,
        canActivate:[rotasGuard]

    },
    {
        path: 'cadastro-paciente',
        component: CadastroPacienteComponent,
        canActivate:[rotasGuard]

    },
    {
        path: 'cadastro-consulta',
        component: CadastroConsultaComponent,
        canActivate:[rotasGuard]

    },
    {
        path: 'cadastro-exame',
        component: CadastroExameComponent,
        canActivate:[rotasGuard]

    },
    {
      path: 'listagem-prontuario',
      component: ListagemProntuarioComponent,
      canActivate:[rotasGuard]

  },
  {
    path: 'prontuario-paciente',
    component: ProntuarioPacienteComponent,
    canActivate:[rotasGuard]

},

    {
        path: 'not-found?login',
        component: LoginComponent
    }


]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
