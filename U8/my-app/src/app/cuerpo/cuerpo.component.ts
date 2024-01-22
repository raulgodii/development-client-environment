import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
  items = ["item1", "item2", "item3", "item4"];
  criptos :any[] = [];
  contenidoInput = "";
  loader = false;
  @Output() lanzadaPeticionEvent = new EventEmitter<string>();

  constructor(public ajax:PeticionesAJAXService){
    
  }

  obtenenerCriptos(){
    this.loader = true;
    this.ajax.peticionAJAX();
    this.loader = false;
      //this.criptos = datos;
    this.lanzadaPeticionEvent.emit("Peticion en curso");
  }

  nuevoValor(){
    this.items.push(this.contenidoInput);
    this.contenidoInput = "";
  }

  borrarItem(i:any){
    console.log("borrando")
    this.items.splice(i, 1);
  }
}
