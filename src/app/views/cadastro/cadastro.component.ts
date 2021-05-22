import { Component, OnInit } from '@angular/core';
import { RequestCadastro } from '../../modelos/request-cadastro';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  requestCadastro = {} as RequestCadastro;
  constructor(private cadastroSvc:  CadastroService) { }

  ngOnInit(): void {
  }
  send(): void{
    this.cadastroSvc.send(this.requestCadastro).subscribe(accept =>(console.log(accept)),error =>(console.error(error)));
    //this.LoginSvc.dopost(this.requestLogin).subscribe(accept =>(console.log(accept)),error =>(console.error(error)));
  }
}
