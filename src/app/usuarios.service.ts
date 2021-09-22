import { Injectable } from '@angular/core';
import { iosTransitionAnimation } from '@ionic/core';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //usuario por defecto
  private usuarios : Usuario[] = [
    {
      userName: 'Juanito',
      pass: '1234',
      email: 'juan@ito.com',
      userType: 'alumno'
    }
  ]

  constructor() { }

  
  //CRUD usuarios
  getUsuarios(){
    return this.usuarios;
  }

  getUsuario(userName: string){
    return this.usuarios.find(x => {return x.userName == userName})
  }

  deleteUsuario(userName: string){
    this.usuarios = this.usuarios.filter( x=> {return x.userName != userName})
  }

  addUsuario(nombreUsuario: string, contraseña: string, correo: string, tipoUsuario: string ){
    this.usuarios.push({
      userName: nombreUsuario,
      pass: contraseña,
      email: correo,
      userType: tipoUsuario
    })
  }



}