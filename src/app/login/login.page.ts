import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from '../servicios/user.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string;
  contrasena:string;
  usuariocoment:string;
  user:any=[];
  constructor(private router:Router, private userService:UserService, public toastController:ToastController) { }

  ngOnInit() {
  }

  getUsuario(event){
    if (this.usuario==null || this.contrasena==null) {
      this.usuariocoment=this.usuario;
      this.usuario=null;
      this.contrasena=null; 
    }
    this.userService.getUser(this.usuario, this.contrasena).then(data=>{
      /*this.usuariocoment=this.usuario;
      this.usuario=null;
      this.contrasena=null; 
      if (data['value']=='true') {
        localStorage.setItem('sesionlogin','true');
        this.router.navigate(['/buscar-movie/',this.usuariocoment]);
      }*/
      //this.presentToast(data["mensaje"], data["color"]);
    }).catch(error=>{
      debugger
    })
  }

}
