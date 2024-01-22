import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { DetalleComponent } from './detalle/detalle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, CabeceraComponent, CuerpoComponent, DetalleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pepito';
  nombreUsuario = "Jose Piñero";
  urlImagen = "";

  ngOnInit(): void {
      console.log("Se inicia el componente");
  }

  cambiaTitulo(){
    console.log("salta evento");
  }

  pulsarTecla(){
    console.log(this.title);
    this.title = "";
  }

  trataEventoDeHijo(datoRecibido: any){
    console.log("salta evento con dato: " + datoRecibido);
  }
}
