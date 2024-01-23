import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{
  @Input() id:string = "";

  ngOnInit(): void {
      console.log("ID" + this.id);
  }
}
