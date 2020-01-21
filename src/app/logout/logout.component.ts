import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  template: '',
  styles: ['']
})
export class LogoutComponent implements OnInit {

  /**
   * 
   * @param ruta administra las rutas
   * @param cookie administra las cookies
   */
  constructor(private ruta: Router, private cookie: CookieService) { }

  /**
   * 
   * elinina el usuario
   * @function ngOnInit
   */
  ngOnInit() {
    this.cookie.delete('user');
    this.ruta.navigate(['']);
  }

}
