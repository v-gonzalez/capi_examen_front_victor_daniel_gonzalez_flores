import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaUsuariosComponent } from '../components/tabla_usuarios/tabla_usuarios.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TablaUsuariosComponent
  ],
  exports: [
    TablaUsuariosComponent
  ]
})
export class UsuariosModule { }
