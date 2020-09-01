import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-tienda',
  templateUrl: './detalle-tienda.page.html',
  styleUrls: ['./detalle-tienda.page.scss'],
})
export class DetalleTiendaPage implements OnInit {
  buscar:boolean= true;
  tienda:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  aparece(){
    this.buscar=!this.buscar;
    this.tienda=!this.tienda;
  }

}
