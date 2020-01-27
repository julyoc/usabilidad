import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const saveDir = gql`mutation pushOneDireccionContacto($data: DireccionContactIn!){
  pushOneDireccionContacto(data: $data)
}`;

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit, OnDestroy {

  public formulario: FormGroup; 

  constructor(private ruta: Router, private cookie: CookieService, private apollo: Apollo) { 
    this.formulario = new FormGroup({
      provincia: new FormControl(''),
      canton: new FormControl(''),
      parroquia: new FormControl(''),
      calle1: new FormControl(''),
      calle2: new FormControl(''),
      teldom: new FormControl(''),
      teltrab: new FormControl(''),
      extteltrab: new FormControl(''),
      cel: new FormControl(''),
      casa: new FormControl(''),
      ref: new FormControl('')
    });
  }

  ngOnInit() {
    if (!this.cookie.check('user') && this.cookie.get('user') === 'admin') {
      this.ruta.navigate(['login']);
    }
  }

  ngOnDestroy() {
  }

  onSubmit() {
    var data = {
      datos_personales_id: this.cookie.get('user'),
      provincia: this.formulario.value.provincia,
      canton: this.formulario.value.canton,
      parroquia: this.formulario.value.parroquia,
      dir: {
        calle_1: this.formulario.value.calle1,
        calle_2: this.formulario.value.calle2,
        num_casa: this.formulario.value.casa,
        referencia: this.formulario.value.ref
      },
      telefono: [{
        num: this.formulario.value.teldom
      },{
        ext: this.formulario.value.extteltrab,
        num: this.formulario.value.teltrab
      },{
        num: this.formulario.value.cel
      }]
    };

    this.apollo.mutate({
      mutation: saveDir,
      variables: { data }
    }).subscribe(res => console.info(res), err => console.error(err));
    this.ruta.navigate(['reg', 'contact']);
  }
}
