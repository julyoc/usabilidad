import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

/**
 * 
 * guarda el usuario por defecto de la pwa
 * @constant user
 */
const user = {
  user: "admin", 
  pass: "admin"
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * 
   * @property objeto para administrar el formulario
   */
  public formulario: FormGroup;

  /**
   * 
   * @property envia un mensaje en caso de error en el usuario
   */
  public message: String;

  /**
   * 
   * @param ruta administra el direccionamiento de las rutas
   * @param cookie administra las cookies
   */
  constructor(private ruta: Router, private cookie: CookieService) { 
    this.formulario = new FormGroup({
      user: new FormControl(''),
      pass: new FormControl('')
    });
    this.message = '';
  }

  /**
   * 
   * verifica si esta inciada la sesion
   * @function ngOnInit
   * @implements
   */
  ngOnInit() {
    if (this.cookie.check('user')) {
      this.ruta.navigate[''];
    }
  }

  /**
   * 
   * verifica el usuario y lo inicia
   * @function onSubmit
   * @return void
   */
  onSubmit() {
    if (this.formulario.value.user != user.user || this.formulario.value.pass != user.pass) {
      this.message = 'Usuario o contraseña incorrectas.';
      return;
    }
    this.cookie.set('user', user.user);
    this.ruta.navigate(['']);
    return;
  }

}
