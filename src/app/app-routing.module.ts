import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './modules/clientes/clientes-form/clientes-form.component';
import { VendedoresVistaComponent } from './modules/vendedor/vendedores-vista/vendedores-vista.component';
import { ProductosVistaComponent } from './modules/productos/productos-vista/productos-vista.component';
import { VentasVistaComponent } from './modules/ventas/ventas-vista/ventas-vista.component';
import { ZonasVistaComponent } from './modules/zonas/zonas-vista/zonas-vista.component';
import { ClientesListComponent } from './modules/clientes/clientes-list/clientes-list.component';

const routes: Routes = [
  
        {
          path: 'clientes',
          component: ClientesListComponent,
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
          path: 'ventas',
          component: VentasVistaComponent,
        },
        {
          path: 'zonas',
          component: ZonasVistaComponent,
        },
        {
          path: 'reportes',
          component: VentasVistaComponent,
        },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
