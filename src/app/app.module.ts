import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosVistaComponent } from './modules/productos/productos-vista/productos-vista.component';
import { VentasVistaComponent } from './modules/ventas/ventas-vista/ventas-vista.component';
import { ZonasVistaComponent } from './modules/zonas/zonas-vista/zonas-vista.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './Shared/shared.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductosModule } from './modules/productos/productos.module';
import { ZonasModule } from './modules/zonas/zonas.module';
import { VentasModule } from './modules/ventas/ventas.module';
import { ReportesModule } from './modules/reportes/reportes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,      
    MatButtonModule  ,
    SharedModule,    
    ClientesModule,
    ProductosModule,
    ZonasModule,
    VentasModule,
    ReportesModule,
    CommonModule,
    MatDialogModule,
    InputTextModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
