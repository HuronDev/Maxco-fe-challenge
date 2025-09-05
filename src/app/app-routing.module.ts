import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './modules/clientes/clientes-form/clientes-form.component';

const routes: Routes = [
  
        {
          path: 'clientes',
          component: ClientesFormComponent,
        },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
