import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './modules/clientes/clientes-form/clientes-form.component';
import { VendedoresVistaComponent } from './modules/vendedor/vendedores-vista/vendedores-vista.component';
import { ProductosVistaComponent } from './modules/productos/productos-vista/productos-vista.component';

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
          path: 'productos',
          component: ProductosVistaComponent,
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
