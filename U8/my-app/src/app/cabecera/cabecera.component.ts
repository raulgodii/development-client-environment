import { Component, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent implements OnInit {
  ngOnInit(): void {
    console.log("Se inicia el componente en la cabecera");
  }
}
