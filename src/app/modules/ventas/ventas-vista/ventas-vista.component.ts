import { Component, OnInit } from '@angular/core';
import { VentasService, Venta, DetalleVenta } from '../ventas.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ventas-vista',
  templateUrl: './ventas-vista.component.html',
  styleUrls: ['./ventas-vista.component.scss'],
  providers: [MessageService],
})
export class VentasVistaComponent implements OnInit {
  ventas: DetalleVenta[] = [];
  selectedVenta?: Venta;
  formVisible = false;

  constructor(private ventasService: VentasService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadVentas();
  }

  loadVentas() {
    this.ventasService.findAll().subscribe({
      next: (data) => (this.ventas = data),
      error: (err) =>
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message || 'No se pudieron cargar las ventas',
        }),
    });
  }

  openNew() {
    this.selectedVenta = undefined;
    this.formVisible = true;
  }

  editCantidad(detalle: DetalleVenta, ventaId: number) {
    const nuevaCantidad = Number(prompt(`Ingrese nueva cantidad para ${detalle.producto}`, `${detalle.cantidad}`));
    if (!nuevaCantidad || nuevaCantidad <= 0) return;

    this.ventasService.updateCantidad(ventaId, detalle.productoId, nuevaCantidad).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Actualizado',
          detail: `Cantidad de ${detalle.producto} actualizada a ${nuevaCantidad}`,
        });
        this.loadVentas();
      },
      error: (err) =>
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message || 'No se pudo actualizar la cantidad',
        }),
    });
  }

  deleteVenta(ventaId: number) {
    if (confirm(`¿Seguro que deseas eliminar esta venta?`)) {
      this.ventasService.remove(ventaId).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Eliminado',
            detail: 'Venta eliminada correctamente',
          });
          this.loadVentas();
        },
        error: (err) =>
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error?.message || 'No se pudo eliminar la venta',
          }),
      });
    }
  }

  onFormSubmit() {
    this.formVisible = false;
    this.loadVentas();
  }
}
