import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(
    private usuariosService: UsuariosService,
    private router : Router,
    private alertController : AlertController
  ) { }

  ngOnInit() {
  }

  registar(user: HTMLInputElement,
           pass: HTMLInputElement,
           email: HTMLInputElement,
           tipo: HTMLIonRadioElement){

    const u = user.value;
    const p = pass.value;
    const e = email.value;
    const t = tipo.value;

    this.usuariosService.addUsuario(u,p,e,t);

    this.showAlertSuccess();

    this.router.navigate(['/login'])

    
    

  }

  async showAlertSuccess(){
    const alert = await this.alertController.create({
      header: 'Usuario registrado con éxito!',
      message: 'Ud. será redirigido a la página de inicio de sesión.',
      buttons: ['OK']
    })

    await alert.present();
  }

}
