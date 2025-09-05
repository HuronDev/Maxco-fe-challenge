import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Zona, ZonasService } from '../zonas.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-zonas-form',
  templateUrl: './zonas-form.component.html',
  styleUrls: ['./zonas-form.component.scss'],
  providers: [MessageService],
})
export class ZonasFormComponent implements OnInit {
  private _zona?: Zona;
  @Output() formSubmit = new EventEmitter<void>();
  zonaForm!: FormGroup;

  @Input()
  set zona(value: Zona | undefined) {
    this._zona = value;
    if (this.zonaForm) {
      this.zonaForm.patchValue({
        nombre: value?.nombre || '',
        descripcion: value?.descripcion || ''
      });
    }
  }

  get zona(): Zona | undefined {
    return this._zona;
  }

  constructor(private fb: FormBuilder, private zonasService: ZonasService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.zonaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['']
    });

    if (this._zona) {
      this.zonaForm.patchValue({
        nombre: this._zona.nombre,
        descripcion: this._zona.descripcion
      });
    }
  }

  submit() {
    if (this.zonaForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'El campo nombre es obligatorio',
      });
      return;
    }

    const data = this.zonaForm.value as Zona;

    if (this._zona?.id) {
      this.zonasService.update(this._zona.id, data).subscribe({
        next: () => {
          this.messageService.add({severity:'success', summary:'Actualizado', detail:'Zona actualizada correctamente'});
          this.formSubmit.emit();
        },
        error: (err) => this.messageService.add({severity:'error', summary:'Error', detail: err.error?.message || 'Error al actualizar zona'})
      });
    } else {
      this.zonasService.create(data).subscribe({
        next: () => {
          this.messageService.add({severity:'success', summary:'Creado', detail:'Zona creada correctamente'});
          this.formSubmit.emit();
        },
        error: (err) => this.messageService.add({severity:'error', summary:'Error', detail: err.error?.message || 'Error al crear zona'})
      });
    }
  }
}
