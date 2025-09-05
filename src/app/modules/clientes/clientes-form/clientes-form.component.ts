import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Cliente, ClientesService } from "../clientes.service";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-clientes-form",
  templateUrl: "./clientes-form.component.html",
  styleUrls: ["./clientes-form.component.scss"],
  providers: [MessageService],
})
export class ClientesFormComponent implements OnInit {
  private _cliente?: Cliente;

  @Output() formSubmit = new EventEmitter<void>();

  clienteForm!: FormGroup;

  @Input()
  set cliente(value: Cliente | undefined) {
    this._cliente = value;
    if (this.clienteForm) {
      this.clienteForm.patchValue({
        nombre: value?.nombre || "",
        email: value?.email || "",
        telefono: value?.telefono || "",
        direccion: value?.direccion || "",
      });
    }
  }

  get cliente(): Cliente | undefined {
    return this._cliente;
  }

  constructor(
    private fb: FormBuilder,
    private clientesService: ClientesService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nombre: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      telefono: [""],
      direccion: [""],
    });

    // Rellenar si el cliente ya existía
    if (this._cliente) {
      this.clienteForm.patchValue({
        nombre: this._cliente.nombre,
        email: this._cliente.email,
        telefono: this._cliente.telefono,
        direccion: this._cliente.direccion,
      });
    }
  }

  submit() {
    if (this.clienteForm.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Todos los campos obligatorios deben estar completos",
      });
      return;
    }

    const data = this.clienteForm.value as Cliente;

    if (this._cliente?.id) {
      this.clientesService.update(this._cliente.id, data).subscribe({
        next: () => {
          this.messageService.add({
            severity: "success",
            summary: "Actualizado",
            detail: "Cliente actualizado correctamente",
          });
          this.formSubmit.emit();
        },
        error: (err) => {
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: err.error?.message || "Error al actualizar cliente",
          });
        },
      });
    } else {
      this.clientesService.create(data).subscribe({
        next: () => {
          this.messageService.add({
            severity: "success",
            summary: "Creado",
            detail: "Cliente creado correctamente",
          });
          this.formSubmit.emit();
        },
        error: (err) => {
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: err.error?.message || "Error al crear cliente",
          });
        },
      });
    }
  }
}
