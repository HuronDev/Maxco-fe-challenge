import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  private apiUrl = 'https://maxco-be-challenge.onrender.com/ventas';

  constructor(private http: HttpClient) {}

  zonasConMasVentasPorVendedor(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/zonas-mas-ventas`).pipe(
      catchError((err) => {
        console.error('Error en zonasConMasVentasPorVendedor:', err);
        return throwError(() => new Error('Error al cargar reporte'));
      }),
    );
  }

  zonasSinVentas(fechaInicio: string, fechaFin: string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/zonas-sin-ventas`, {
        params: { fechaInicio, fechaFin },
      })
      .pipe(
        catchError((err) => {
          console.error('Error en zonasSinVentas:', err);
          return throwError(() => new Error('Error al cargar reporte'));
        }),
      );
  }

  vendedoresSinVentas(fechaInicio: string, fechaFin: string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/vendedores-sin-ventas`, {
        params: { fechaInicio, fechaFin },
      })
      .pipe(
        catchError((err) => {
          console.error('Error en vendedoresSinVentas:', err);
          return throwError(() => new Error('Error al cargar reporte'));
        }),
      );
  }

  ventasPorClientePorAño(anios: number[]): Observable<any[]> {
    const aniosStr = anios.join(',');
    return this.http
      .get<any[]>(`${this.apiUrl}/ventas-por-cliente`, { params: { anios: aniosStr } })
      .pipe(
        catchError((err) => {
          console.error('Error en ventasPorClientePorAño:', err);
          return throwError(() => new Error('Error al cargar reporte'));
        }),
      );
  }
}
