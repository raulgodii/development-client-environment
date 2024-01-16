import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pepito';
  nombreUsuario = "Jose Piñero";
  urlImagen = "https://www.santevet.es/uploads/images/es_ES/razas/gatocomuneuropeo.jpeg";

  ngOnInit(): void {
      console.log("Se inicia el componente");
  }

  cambiaTitulo(){
    console.log("salta evento");
  }

  pulsarTecla(){
    console.log("Has pulsado una tecla");
  }
}
