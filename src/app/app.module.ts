import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './views/home/home.component';
import { PedidoslistComponent } from './views/pedidoslist/pedidoslist.component';
import { NgxPaginationModule } from 'ngx-pagination'; // Módulo da dependência de paginação


@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    LoginComponent,
    CadastroComponent,
    PedidosComponent,
    HomeComponent,
    PedidoslistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
