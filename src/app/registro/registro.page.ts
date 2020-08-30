import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../servicios/user.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user:any=[];
  showPassword = false;
  passwordToogleIcon= 'eye-outline';

  showPasswordConfir = false;
  passwordToogleIconConfir = 'eye-outline';

  constructor(private router:ActivatedRoute, 
              public toastController: ToastController, 
              private userService:UserService) { }

  ngOnInit() {
  }

  togglePassword():void{
    this.showPassword = !this.showPassword;

    if(this.passwordToogleIcon == 'eye-outline'){
      this.passwordToogleIcon='eye-off-outline';
    }else{
      this.passwordToogleIcon='eye-outline';
    }
  }

  togglePasswordConfir():void{
    this.showPasswordConfir = !this.showPasswordConfir;

    if(this.passwordToogleIconConfir == 'eye-outline'){
      this.passwordToogleIconConfir='eye-off-outline';
    }else{
      this.passwordToogleIconConfir='eye-outline';
    }
  }

  addUsuario(event){
    if(this.user['nombre'] == null || this.user['email'] == null || this.user['password'] == null || this.user['passwordConf'] == null)
    {
        this.user['nombre'] = '';
        this.user['email'] = '';
        this.user['password'] = '';
        this.user['passwordConf'] = '';
    }
    if (this.user['password'] != this.user['passwordConf']) {
      //this.presentToast("Contraseña de confirmación inválida", "danger");
      this.user['passwordConf'] = '';
    }else{
      this.userService.addUser(this.user).then(data=>{
        this.user['nombre'] = '';
          this.user['email'] = '';
          this.user['password'] = '';
          this.user['passwordConf'] = '';
        //this.presentToast(data["mensaje"], data["color"]);
      }).catch(error=>{
        
      })
    }
    
}

}
