import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { VentasService, Venta, DetalleVenta } from '../ventas.service';

@Component({
  selector: 'app-ventas-form',
  templateUrl: './ventas-form.component.html',
  styleUrls: ['./ventas-form.component.scss'],
})
export class VentasFormComponent implements OnInit {
  @Input() venta?: Venta;
  @Output() formSubmit = new EventEmitter<void>();
  ventaForm!: FormGroup;

  clientes: any[] = [];
  vendedores: any[] = [];
  zonas: any[] = [];
  productos: any[] = [];

  constructor(private fb: FormBuilder, private ventasService: VentasService) {}

  ngOnInit(): void {
    this.loadData();

    this.ventaForm = this.fb.group({
      clienteId: [this.venta?.clienteId || null, Validators.required],
      vendedorId: [this.venta?.vendedorId || null, Validators.required],
      zonaId: [this.venta?.zonaId || null, Validators.required],
      fecha: [this.venta?.fecha || '', Validators.required],
      detalles: this.fb.array([]),
    });

    if (this.venta?.detalles?.length) {
      this.venta.detalles.forEach((d) => this.addDetalle(d));
    } else {
      this.addDetalle();
    }
  }

  get detalles(): FormArray {
    return this.ventaForm.get('detalles') as FormArray;
  }

  loadData() {
    this.ventasService.getClientes().subscribe((res) => (this.clientes = res));
    this.ventasService.getVendedores().subscribe((res) => (this.vendedores = res));
    this.ventasService.getZonas().subscribe((res) => (this.zonas = res));
    this.ventasService.getProductos().subscribe((res) => (this.productos = res));
    this.ventasService.getProductos().subscribe((res) => {
    this.productos = res;
    if (this.detalles.length === 0) this.addDetalle(); 
  });


  }

  addDetalle(detalle?: DetalleVenta) {
    this.detalles.push(
      this.fb.group({
        productoId: [detalle?.productoId || null, Validators.required],
        cantidad: [detalle?.cantidad || 1, [Validators.required, Validators.min(1)]],
      })
    );
  }

  removeDetalle(index: number) {
    this.detalles.removeAt(index);
    if (this.detalles.length === 0) {
      this.addDetalle(); // Siempre al menos un detalle
    }
  }

  submit() {
    if (this.ventaForm.invalid) {
      alert('Formulario inválido: Todos los campos son obligatorios y deben ser válidos');
      return;
    }

    const data: Venta = this.ventaForm.value;

    this.ventasService.create(data).subscribe({
      next: () => {
        alert('Venta guardada correctamente'); // alerta simple
        this.formSubmit.emit();
        this.ventaForm.reset();
        this.detalles.clear();
        this.addDetalle();
      },
      error: (err) => {
        let mensaje = 'No se pudo guardar la venta';
        if (err.error?.message) {
          mensaje = Array.isArray(err.error.message)
            ? err.error.message.join(', ')
            : err.error.message;
        }
        alert('Error al guardar: ' + mensaje);
      },
    });
  }
}
