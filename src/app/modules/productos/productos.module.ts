import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosVistaComponent } from './productos-vista/productos-vista.component';
import { SharedModule } from '../../Shared/shared.module';



@NgModule({
  declarations: [ProductosVistaComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ProductosModule { }
