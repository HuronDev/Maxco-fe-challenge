import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DetalleVenta {
  productoId: number;
  producto: string;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
}

export interface Venta {
  id?: number;
  clienteId: number;
  cliente?: string;
  vendedorId: number;
  vendedor?: string;
  zonaId: number;
  zona?: string;
  fecha: string;
  monto_total?: number;
  detalles: DetalleVenta[];
}

export interface UpdateCantidadDto {
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class VentasService {
  private apiUrl = 'http://localhost:3000/ventas';
  private apiClientes = 'http://localhost:3000/clientes';
  private apiVendedores = 'http://localhost:3000/vendedores';
  private apiZonas = 'http://localhost:3000/zonas';
  private apiProductos = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  // Ventas
  findAll(): Observable<DetalleVenta[]> {
    return this.http.get<DetalleVenta[]>(this.apiUrl);
  }

  create(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(this.apiUrl, venta);
  }

  updateCantidad(ventaId: number, productoId: number, cantidad: number) {
    return this.http.patch(`${this.apiUrl}/${ventaId}/detalles/${productoId}/cantidad`, { cantidad });
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getClientes(): Observable<{ id: number; nombre: string }[]> {
    return this.http.get<{ id: number; nombre: string }[]>(this.apiClientes);
  }

  getVendedores(): Observable<{ id: number; nombre: string }[]> {
    return this.http.get<{ id: number; nombre: string }[]>(this.apiVendedores);
  }

  getZonas(): Observable<{ id: number; nombre: string }[]> {
    return this.http.get<{ id: number; nombre: string }[]>(this.apiZonas);
  }

  getProductos(): Observable<{ id: number; nombre: string }[]> {
    return this.http.get<{ id: number; nombre: string }[]>(this.apiProductos);
  }
}
