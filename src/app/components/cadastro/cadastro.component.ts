import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
   mostrar : boolean = false;
   mostrarConfirmar: boolean = false;
    mostrarSenha(){
      this.mostrar = !this.mostrar;
    }
    mostrarSenhaConfirmar(){
      this.mostrarConfirmar = !this.mostrarConfirmar;
    }

}
