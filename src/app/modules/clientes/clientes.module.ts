import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { SharedModule } from '../../Shared/shared.module';

@NgModule({
  declarations: [ClientesFormComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ClientesModule { }
