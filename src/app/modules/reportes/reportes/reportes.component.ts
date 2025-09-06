import { Component } from '@angular/core';
import { VentasService } from '../reportes.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
  providers: [MessageService],
})
export class ReportesComponent {
  reporteSeleccionado: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  anios: number[] = [];
  resultados: any[] = [];
  columnas: any[] = [];

  constructor(
    private ventasService: VentasService,
    private messageService: MessageService
  ) {}

  seleccionarReporte(nombre: string) {
    this.reporteSeleccionado = nombre;
    this.resultados = [];
    this.columnas = [];
  }

  onChangeAnios(value: string | null | undefined) {
    if (!value) {
      this.anios = [];
      return;
    }
    this.anios = value
      .split(',')
      .map((x) => parseInt(x.trim(), 10))
      .filter((n) => !isNaN(n));
  }

  generarReporte() {
    switch (this.reporteSeleccionado) {
      case 'zonasConMasVentas':
        this.ventasService.zonasConMasVentasPorVendedor().subscribe({
          next: (res) => {
            this.resultados = res;
            this.columnas = [
              { field: 'vendedor', header: 'Vendedor' },
              { field: 'zona', header: 'Zona' },
              { field: 'totalVentas', header: 'Total Ventas' },
            ];
          },
          error: (err) => this.showError(err),
        });
        break;

      case 'zonasSinVentas':
        if (!this.fechaInicio || !this.fechaFin) {
          this.showError('Debe seleccionar fecha de inicio y fin');
          return;
        }
        this.ventasService
          .zonasSinVentas(this.fechaInicio, this.fechaFin)
          .subscribe({
            next: (res) => {
              this.resultados = res.map((z) => ({ nombre: z.nombre }));
              this.columnas = [{ field: 'nombre', header: 'Zona' }];
            },
            error: (err) => this.showError(err),
          });
        break;

      case 'vendedoresSinVentas':
        if (!this.fechaInicio || !this.fechaFin) {
          this.showError('Debe seleccionar fecha de inicio y fin');
          return;
        }
        this.ventasService
          .vendedoresSinVentas(this.fechaInicio, this.fechaFin)
          .subscribe({
            next: (res) => {
              this.resultados = res.map((v) => ({ nombre: v.nombre }));
              this.columnas = [{ field: 'nombre', header: 'Vendedor' }];
            },
            error: (err) => this.showError(err),
          });
        break;

      case 'ventasPorClientePorAño':
        if (this.anios.length === 0) {
          this.showError('Debe ingresar al menos un año válido');
          return;
        }
        this.ventasService.ventasPorClientePorAño(this.anios).subscribe({
          next: (res) => {
            this.resultados = res;
            const ventasKeys = res.length ? Object.keys(res[0].ventas) : [];
            this.columnas = [
              { field: 'nombreCliente', header: 'Cliente' },
              { field: 'zona', header: 'Zona' },
              ...ventasKeys.map((anio) => ({
                field: `ventas.${anio}`,
                header: anio,
              })),
            ];
          },
          error: (err) => this.showError(err),
        });
        break;

      default:
        this.resultados = [];
        this.columnas = [];
    }
  }

  showError(error: any) {
    const msg =
      typeof error === 'string'
        ? error
        : error?.error?.message || 'Error al generar el reporte';
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: msg,
    });
  }

  getNested(obj: any, path: string) {
    return path.split('.').reduce((o, key) => (o ? o[key] : null), obj);
  }

 

  isSelected(nombre: string): boolean {
    return this.reporteSeleccionado === nombre;
  }
}
