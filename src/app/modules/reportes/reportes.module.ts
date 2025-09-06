import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesComponent } from './reportes/reportes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    ReportesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    ToastModule,
    DropdownModule,
  ],exports: [ReportesComponent]
})
export class ReportesModule { }
