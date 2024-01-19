import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient){

  }

  peticionAJAX(){
    this.http.get("https://api.coingecko.com/api/v3/coins/list").subscribe((datos:any)=>{
      console.log(datos);
      this.criptos = datos;
    });
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
