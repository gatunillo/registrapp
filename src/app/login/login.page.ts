import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //variable para guardar credenciales de ingreso
  public user : Usuario;
  

  constructor(private usuario: UsuariosService,
              private router : Router,
              public alertController : AlertController) { }

  ngOnInit() {
    
  }

  login(){
    this.router.navigate(['/dashboard']);
  }

  async showAlertPass(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Contraseña incorrecta.',
      buttons: ['OK']
    })

    await alert.present();
  }

  async showAlertUserName(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Nombre de usuario incorrecto.',
      buttons: ['OK']
    })

    await alert.present();
  }

  async showAlertNoUserName(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Ingrese nombre de usuario.',
      buttons: ['OK']
    })

    await alert.present();
  }

  ingresar(userTyped : HTMLInputElement,
           pass     : HTMLInputElement)
  {

    const un = userTyped.value; //tipeo del usuario
    const p  = pass.value;

    if (un == ''){ 
      //pregunta si escribieron usuario
      this.showAlertNoUserName();
    } else {
      this.user = this.usuario.getUsuario(un); //captura el usuario ingresado
      if (this.user == undefined){
        //pregunta si el usuario tipeado existe
        this.showAlertUserName
      } else {
        if (p == this.user.pass){
          //pregunta si la contraseña es correcta
          this.login();
        } else {
          this.showAlertPass();
        }
      }
    }

    
    
    

  }

  

}