import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Zona {
  id?: number;
  nombre: string;
  descripcion?: string;
  activo?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ZonasService {
  private apiUrl = 'https://maxco-be-challenge.onrender.com/zonas'; 

  constructor(private http: HttpClient) {}

  findAll(): Observable<Zona[]> {
    return this.http.get<Zona[]>(this.apiUrl);
  }

  findOne(id: number): Observable<Zona> {
    return this.http.get<Zona>(`${this.apiUrl}/${id}`);
  }

  create(zona: Zona): Observable<Zona> {
    return this.http.post<Zona>(this.apiUrl, zona);
  }

  update(id: number, zona: Zona): Observable<Zona> {
    return this.http.patch<Zona>(`${this.apiUrl}/${id}`, zona);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
