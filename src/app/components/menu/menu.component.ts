import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public alertController: AlertController, private router:Router, private menu: MenuController) { }

  ngOnInit() {}

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta!',
      message: '¿Esta seguro de cerrar su sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            //this.borrar();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  categoria(event){
    this.router.navigate(['/categorias']);
  }

  inicio(event){
    this.router.navigate(['/inicio']);
    this.menu.enable(false, 'first');

  }

}
