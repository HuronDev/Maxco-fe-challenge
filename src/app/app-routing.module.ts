import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './modules/clientes/clientes-form/clientes-form.component';
import { VendedoresVistaComponent } from './modules/vendedor/vendedores-vista/vendedores-vista.component';

const routes: Routes = [
  
        {
          path: 'clientes',
          component: ClientesFormComponent,
        },
        {
          path: 'vendedores',
          component: VendedoresVistaComponent,
        },
        {
          path: 'clientes',
          component: ClientesFormComponent,
        },
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
