import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonasVistaComponent } from './zonas-vista/zonas-vista.component';
import { SharedModule } from '../../Shared/shared.module';



@NgModule({
  declarations: [ZonasVistaComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ZonasModule { }
