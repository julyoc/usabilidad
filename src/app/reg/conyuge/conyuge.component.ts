import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


const guardarConyuge = gql` mutation pushOneConyuge($data: ConyugeIn!){
  pushOneConyuge(data: $data)
}`;


@Component({
  selector: 'app-conyuge',
  templateUrl: './conyuge.component.html',
  styleUrls: ['./conyuge.component.css']
})
export class ConyugeComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private cookie: CookieService, private ruta: Router, private apollo: Apollo) { 
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      relacion: new FormControl(''),
      nacimiento: new FormControl('')
    });
  }

  ngOnInit() {
    if (!this.cookie.check('user')) {
      this.ruta.navigate(['']);
    }
  }

  onSubmit() {
    var data = {
      datos_personales_id: this.cookie.get('user'),
      nombre: this.formulario.value.nombre.split(' '),
      apellido: this.formulario.value.apellido.split(' '),
      relacion: this.formulario.value.relacion,
      nacimiento: this.formulario.value.nacimiento
    };
    this.apollo.mutate({
      mutation: guardarConyuge,
      variables: {data}
    }).subscribe(res => this.ruta.navigate(['reg','admin']), err => console.error(err));
  }

}
