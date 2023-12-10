import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./formulario/formulario.component";
import { ListadoComponent } from "./listado/listado.component";
import { Cliente } from './interface/Cliente';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ListadoComponent, FormularioComponent],})
    
export class AppComponent {
  title = 'TA38Formulario';
  variableComponente = "app.component";

  clienteApp: Cliente[] = [];

  handleClientRegistered(cliente: Cliente) {
    this.clienteApp.push(cliente);
  }
}
