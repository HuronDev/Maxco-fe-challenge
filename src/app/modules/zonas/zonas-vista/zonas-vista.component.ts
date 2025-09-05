import { Component, OnInit } from '@angular/core';
import { Zona, ZonasService } from '../zonas.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-zonas-vista',
  templateUrl: './zonas-vista.component.html',
  styleUrls: ['./zonas-vista.component.scss'],
  providers: [MessageService]
})
export class ZonasVistaComponent implements OnInit {
  zonas: Zona[] = [];
  selectedZona?: Zona;
  formVisible = false;

  constructor(private zonasService: ZonasService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadZonas();
  }

  loadZonas() {
    this.zonasService.findAll().subscribe({
      next: (data) => this.zonas = data,
      error: (err) => this.messageService.add({severity:'error', summary:'Error', detail: err.error?.message || 'No se pudieron cargar las zonas'})
    });
  }

  openNew() {
    this.selectedZona = undefined;
    this.formVisible = true;
  }

  editZona(zona: Zona) {
    this.selectedZona = zona;
    this.formVisible = true;
  }

  deleteZona(zona: Zona) {
    if (confirm(`¿Seguro que deseas eliminar la zona "${zona.nombre}"?`)) {
      this.zonasService.remove(zona.id!).subscribe({
        next: () => {
          this.messageService.add({severity:'success', summary:'Eliminado', detail:`Zona ${zona.nombre} eliminada`});
          this.loadZonas();
        },
        error: (err) => this.messageService.add({severity:'error', summary:'Error', detail: err.error?.message || 'No se pudo eliminar'})
      });
    }
  }

  onFormSubmit() {
    this.formVisible = false;
    this.loadZonas();
  }
}
