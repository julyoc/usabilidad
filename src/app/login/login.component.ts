import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';


const getUser = gql`query findUser($mail: String!, $pass: String!){
  findUser(mail: $mail, pass: $pass) {
    _id,
    pass,
    mail
  }
}`;

/**
 * 
 * guarda el usuario por defecto de la pwa
 * @constant user
 */
const user = {
  user: "admin", 
  pass: "admin"
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  /**
   * 
   * @property objeto para administrar el formulario
   */
  public formulario: FormGroup;

  /**
   * 
   * @property envia un mensaje en caso de error en el usuario
   */
  public message: String;

  public querySubscription: Subscription;

  /**
   * 
   * @param ruta administra el direccionamiento de las rutas
   * @param cookie administra las cookies
   */
  constructor(private ruta: Router, private cookie: CookieService, private apollo: Apollo) { 
    this.formulario = new FormGroup({
      user: new FormControl(''),
      pass: new FormControl('')
    });
    this.message = '';
  }

  /**
   * 
   * verifica si esta inciada la sesion
   * @function ngOnInit
   * @implements
   */
  ngOnInit() {
    if (this.cookie.check('user')) {
      this.ruta.navigate[''];
    }
  }

  ngOnDestroy() {
    if (this.cookie.get('user') != user.user && this.cookie.check('user')) {
      this.querySubscription.unsubscribe();
    }
  }

  /**
   * 
   * verifica el usuario y lo inicia
   * @function onSubmit
   * @return void
   */
  onSubmit() {
    if (this.formulario.value.user === user.user || this.formulario.value.pass === user.pass){
      this.cookie.set('user', user.user);
      this.ruta.navigate(['']);
      return;
    }
    if(this.cookie.check('_id')){
      this.cookie.delete('_id');
    }

    this.querySubscription = this.apollo.watchQuery<any>({
      query: getUser,
      variables: {
        mail: this.formulario.value.user,
        pass: this.formulario.value.pass
      }
    }).valueChanges.subscribe(({data}) => {
      this.cookie.set('user',data.findUser._id);
      this.ruta.navigate(['reg','admin']);
    }, err => {
      if (this.formulario.value.user != user.user || this.formulario.value.pass != user.pass) {
        this.message = 'Usuario o contraseña incorrectas.';
      }
    });
  }
}
