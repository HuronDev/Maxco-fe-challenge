import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonasVistaComponent } from './zonas-vista/zonas-vista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ZonasFormComponent } from './zonas-form/zonas-form.component';

@NgModule({
  declarations: [ZonasFormComponent, ZonasVistaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ToastModule,
  ],
    exports: [ZonasVistaComponent,
      ]
})
export class ZonasModule {}
