import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private cookies: any;
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.cookies = this.cookieService.getAll();
    console.log('cookies:', this.cookies);
  }

  ngOnDestroy() {
    delete this.cookies;
  }
}
