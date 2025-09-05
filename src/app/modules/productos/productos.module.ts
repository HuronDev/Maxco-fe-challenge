import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosVistaComponent } from './productos-vista/productos-vista.component';
import { SharedModule } from '../../Shared/shared.module';
import { ProductosFormComponent } from './productos-form/productos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [ProductosVistaComponent, ProductosFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ToastModule
    
  ],
  exports: [
     ProductosVistaComponent
    ]
})
export class ProductosModule { }
