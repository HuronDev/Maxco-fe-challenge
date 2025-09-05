import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../productos.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-productos-vista',
  templateUrl: './productos-vista.component.html',
  styleUrls: ['./productos-vista.component.scss'],
  providers: [MessageService]
})
export class ProductosVistaComponent implements OnInit {
  productos: Producto[] = [];
  selectedProducto?: Producto;
  formVisible = false;

  constructor(private productosService: ProductosService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos() {
    this.productosService.findAll().subscribe({
      next: (data) => this.productos = data,
      error: (err) => this.messageService.add({severity:'error', summary:'Error', detail: err.error?.message || 'No se pudieron cargar los productos'})
    });
  }

  openNew() {
    this.selectedProducto = undefined;
    this.formVisible = true;
  }

  editProducto(producto: Producto) {
    this.selectedProducto = producto;
    this.formVisible = true;
  }

  deleteProducto(producto: Producto) {
    if (confirm(`¿Seguro que deseas eliminar a ${producto.nombre}?`)) {
      this.productosService.remove(producto.id!).subscribe({
        next: () => {
          this.messageService.add({severity:'success', summary:'Eliminado', detail:`Producto ${producto.nombre} eliminado`});
          this.loadProductos();
        },
        error: (err) => this.messageService.add({severity:'error', summary:'Error', detail: err.error?.message || 'No se pudo eliminar'})
      });
    }
  }

  onFormSubmit() {
    this.formVisible = false;
    this.loadProductos();
  }
}
