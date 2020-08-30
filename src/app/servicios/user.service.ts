import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http:HttpClient) { }

  addUser(user:any){
    const _body = new HttpParams()
    .set('name', user.nombre)
    .set('email', user.email)
    .set('password', user.password)
    debugger
    let url='https://quiet-plains-50512.herokuapp.com/api/user';
    return new Promise((resolve, reject)=>{
      this.Http.post(url, _body).subscribe(res=>{
       
        resolve(res);
      },error=>{
        debugger
        reject(error); 
      })
    }) 
  }

  getUser(usuario:string, contraseña:string){
    let url='https://quiet-plains-50512.herokuapp.com/api/user/'+usuario+'/'+contraseña;
    return new Promise((resolve, reject)=>{
      this.Http.get(url).subscribe(res=>{
        resolve(res);
      },error=>{
        debugger
        reject(error); 
      })
    }) 
  }
}
