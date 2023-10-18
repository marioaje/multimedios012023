import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.css']
})
export class ModalSuccessComponent {
  @Input() usuarioNombre: string = "";
  @Input() id: string = "";
  @Input() nombre: string = "";
  @Input() descripcion: string = "";

  constructor(private bsModalRef: BsModalRef) {}

 // bsModalRef: BsModalRef | undefined;

  closeModalSuccess(){    
    this.bsModalRef?.hide();
  }
  cerrarModal() {
    this.bsModalRef.hide(); // Cierra el modal
  }
}
