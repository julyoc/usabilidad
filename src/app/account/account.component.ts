import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  /**
   * @property verifica si se ha iniciado sesion
   */
  public islog: Boolean;
  public isUser: Boolean;
  /**
   * 
   * @param cookie permite la administracion de cookies
   * @param ruta ayuda al direccionamiento de las rutas
   */
  constructor(private cookie: CookieService, private ruta: Router) { }

  /**
   * 
   * al cargar la ruta verifica si existe un usuario
   * @function ngOnInit
   * @implements
   */
  ngOnInit() {
    this.islog = !this.cookie.check('user');
    if (this.cookie.check('user')){
      console.log(this.cookie.get('user'));
      if (this.cookie.get('user') != 'admin') {
        this.isUser=true;
      }
    }
  }

  /**
   * 
   * redireciona la pagina a 'login'
   * @function in
   * @param $event administrador de eventos
   */
  in($event) {
    this.ruta.navigate(['login']);
  }

  /**
   * 
   * redirecciona la pagina a 'logout'
   * @function out
   * @param $event administra los eventos
   */
  out($event) {
    this.ruta.navigate(['logout']);
  }

  /**
   * 
   * redirecciona al administrador para actualizar datos
   * @function dat 
   * @param $event 
   */
  dat($event) {
    this.ruta.navigate(['reg', 'admin']);
  }

}
