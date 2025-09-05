import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id?: number;
  nombre: string;
  descripcion?: string;
  precio: number;
  stock?: number;
  categoria?: string;
  activo?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/productos'; // Cambiar según tu backend

  constructor(private http: HttpClient) {}

  findAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  findOne(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  create(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }

  update(id: number, producto: Producto): Observable<Producto> {
    return this.http.patch<Producto>(`${this.apiUrl}/${id}`, producto);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
