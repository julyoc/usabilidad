import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  /**
   * 
   * @property guarda las cookies
   */
  private cookies: any;
  /**
   * 
   * @param cookieService servicio de administracion de cookies
   */
  constructor(private cookieService: CookieService) { }

  /**
   * 
   * obtiene todas las cookies
   * @function ngOnInit
   */
  ngOnInit() {
    this.cookies = this.cookieService.getAll();
    console.log('cookies:', this.cookies);
  }
  /**
   * 
   * elimina los variables 
   * @function ngOnDestroy
   * @implements
   */
  ngOnDestroy() {
    delete this.cookies;
  }
}
