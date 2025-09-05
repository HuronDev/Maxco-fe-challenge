import { Component, OnInit } from '@angular/core';
import { Cliente, ClientesService } from '../clientes.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss'],
  providers: [MessageService],
})
export class ClientesListComponent implements OnInit {
  clientes: Cliente[] = [];
  selectedCliente?: Cliente;
  formVisible = false;

  constructor(
    private clientesService: ClientesService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes() {
    this.clientesService.findAll().subscribe((data) => {
      this.clientes = data;
    });
  }

  openNew() {
    this.selectedCliente = undefined;
    this.formVisible = true;
  }

  editCliente(cliente: Cliente) {
    this.selectedCliente = cliente;
    this.formVisible = true;
  }

  deleteCliente(cliente: Cliente) {
    if (confirm(`¿Seguro que deseas eliminar a ${cliente.nombre}?`)) {
      this.clientesService.remove(cliente.id!).subscribe({
        next: () => {
          this.loadClientes();
          this.messageService.add({
            severity: 'warn',
            summary: 'Eliminado',
            detail: 'Cliente eliminado correctamente',
          });
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error?.message || 'No se pudo eliminar',
          });
        },
      });
    }
  }

  onFormSubmit() {
    this.formVisible = false;
    this.loadClientes();
  }
}
