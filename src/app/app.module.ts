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
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
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
    NgxPaginationModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgbModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  
  ],
  providers: [],
  bootstrap: [AppComponent, PedidoslistComponent]
})
export class AppModule { }
