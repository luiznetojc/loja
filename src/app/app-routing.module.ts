import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { LoginComponent } from './views/login/login.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { PedidoslistComponent } from './views/pedidoslist/pedidoslist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'produtos', component: ProdutosComponent },
      { path: 'pedidos', component: PedidosComponent },
      { path: 'pedidoslist', component: PedidoslistComponent },

    ],
    //canActivate: [AuthGuard]
  },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
