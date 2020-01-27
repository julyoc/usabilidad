import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


const guardarContact = gql`mutation pushOneContactoEmergencia($data: ContactoEmergenciaIn!){
  pushOneContactoEmergencia(data: $data)
}`;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  public formulario: FormGroup;

  constructor(private ruta: Router, private cookie: CookieService, private apollo: Apollo) { 
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      telefono: new FormControl(''),
      number: new FormControl(''),
      ci: new FormControl(false),
      parentesco: new FormControl(''),
      provincia: new FormControl(''),
      canton: new FormControl(''),
      parroquia: new FormControl(''),
      calle_1: new FormControl(''),
      calle_2: new FormControl(''),
      num_casa: new FormControl(''),
      referencia: new FormControl(''),
    });
  }

  ngOnInit() {
    if (!this.cookie.check('user')) {
      this.ruta.navigate(['login'])
    }
  }

  ngOnDestroy() {
  }

  onSubmit() {
    var data = {
      datos_personales_id: this.cookie.get('user'),
      nombre: this.formulario.value.nombre.split(' '),
      apellido: this.formulario.value.apellido.split(' '),
      telefono: this.formulario.value.telefono.split(','),
      identificacion: {
        ci: this.formulario.value.ci == false ? true : false,
        number: this.formulario.value.number
      },
      parentesco: this.formulario.value.parentesco,
      provincia: this.formulario.value.provincia,
      canton: this.formulario.value.canton,
      parroquia: this.formulario.value.parroquia,
      dir: {
        calle_1: this.formulario.value.calle_1,
        calle_2: this.formulario.value.calle_2,
        num_casa: this.formulario.value.num_casa,
        referencia: this.formulario.value.referencia
      }
    };
    this.apollo.mutate({
      mutation: guardarContact,
      variables: {data}
    }).subscribe(res => {
      console.log(res)
      this.ruta.navigate(['reg','admin'])
    }, err => console.log(err));
  }

}
