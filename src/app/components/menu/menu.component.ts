import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menu: MenuController, public alertController: AlertController) { }

  ngOnInit() {}
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

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
  

  borrar(){
    localStorage.removeItem('sesionlogin');
    //this.rout.navigate(['/login']);
  }

  
}
