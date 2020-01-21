import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit, OnDestroy {

  /**
   * 
   * @param ruta adminstra las rutas
   * @param cookie adminstra las cookies
   */
  constructor(private ruta: Router, private cookie: CookieService) { }

  /**
   * 
   * @function ngOnInit
   * @implements
   */
  ngOnInit() {
    if (!this.cookie.check('user')) {
      this.ruta.navigate(['login'])
    }
  }

  /**
   * 
   * @function ngOnDestroy
   * @implements
   */
  ngOnDestroy() {
  }

}
