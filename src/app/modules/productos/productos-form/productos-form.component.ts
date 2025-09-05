import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto, ProductosService } from '../productos.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.scss'],
  providers: [MessageService],
})
export class ProductosFormComponent implements OnInit {
  private _producto?: Producto;
  @Output() formSubmit = new EventEmitter<void>();

  productoForm!: FormGroup;

  @Input()
  set producto(value: Producto | undefined) {
    this._producto = value;
    if (this.productoForm) {
      this.productoForm.patchValue({
        nombre: value?.nombre || '',
        descripcion: value?.descripcion || '',
        precio: value?.precio || 0,
        stock: value?.stock || 0,
        categoria: value?.categoria || ''
      });
    }
  }

  get producto(): Producto | undefined {
    return this._producto;
  }

  constructor(private fb: FormBuilder, private productosService: ProductosService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      precio: [0, Validators.required],
      stock: [0, Validators.required],
      categoria: ['']
    });

    if (this._producto) {
      this.productoForm.patchValue({
        nombre: this._producto.nombre,
        descripcion: this._producto.descripcion,
        precio: this._producto.precio,
        stock: this._producto.stock,
        categoria: this._producto.categoria
      });
    }
  }

  submit() {
    if (this.productoForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Todos los campos obligatorios deben estar completos',
      });
      return;
    }

    const data = this.productoForm.value as Producto;

    if (this._producto?.id) {
      this.productosService.update(this._producto.id, data).subscribe({
        next: () => {
          this.messageService.add({severity:'success', summary:'Actualizado', detail:'Producto actualizado correctamente'});
          this.formSubmit.emit();
        },
        error: (err) => this.messageService.add({severity:'error', summary:'Error', detail: err.error?.message || 'Error al actualizar producto'})
      });
    } else {
      this.productosService.create(data).subscribe({
        next: () => {
          this.messageService.add({severity:'success', summary:'Creado', detail:'Producto creado correctamente'});
          this.formSubmit.emit();
        },
        error: (err) => this.messageService.add({severity:'error', summary:'Error', detail: err.error?.message || 'Error al crear producto'})
      });
    }
  }
}
