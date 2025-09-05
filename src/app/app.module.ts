import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductosVistaComponent } from './modules/productos/productos-vista/productos-vista.component';
import { VentasVistaComponent } from './modules/ventas/ventas-vista/ventas-vista.component';
import { ZonasVistaComponent } from './modules/zonas/zonas-vista/zonas-vista.component';
import { NavbarComponent } from './modules/header/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosVistaComponent,
    VentasVistaComponent,
    ZonasVistaComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
