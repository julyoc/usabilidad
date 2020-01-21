import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit, OnDestroy {

  constructor(private ruta: Router, private cookie: CookieService) { }

  ngOnInit() {
    if (!this.cookie.check('user')) {
      this.ruta.navigate(['login']);
    }
  }

  ngOnDestroy() {
  }

}
