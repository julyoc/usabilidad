import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit() {
  }

  onDir($event) {
    this.ruta.navigate(['reg', 'dir']);
  }

  onContact($event) {
    this.ruta.navigate(['reg', 'contact']);
  }

  onConyuge($event) {
    this.ruta.navigate(['reg','conyuge']);
  }

}
