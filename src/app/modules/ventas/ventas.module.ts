import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasFormComponent } from './ventas-form/ventas-form.component';
import { VentasVistaComponent } from './ventas-vista/ventas-vista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    VentasFormComponent,VentasVistaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ToastModule,
    DropdownModule,
  ],
    exports: [
      VentasVistaComponent
      ]
})
export class VentasModule { }
