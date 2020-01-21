import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';


const sendform = gql`mutation pushOnePersonData($data: DatosPersonalesIn!) {
  pushOnePersonData(data: $data)
}
`;

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit, OnDestroy {

  /**
   * 
   * @public
   * @property adminstra los datos del formilario
   */
  public formulario: FormGroup;

  /**
   * 
   * @public
   * @property guarda la lista de tipos de sangre
   */
  public tipoSangre: Array<String>;

  /**
   * 
   * @public
   * @property guarda el tipo de sangre selecionado
   */
  public sangre = new FormControl('');
  
  /**
   * 
   * @public
   * @property guarda la lista de sexos
   */
  public sexo: Array<String>;
  /**
   * 
   * @public
   * @property guarda el sexo seleccionado
   */
  public sexoform = new FormControl('');
  /**
   * 
   * @public
   * @property guarda en caso de tener una discapasidad
   */
  public disSelec: Boolean;
  /**
   * 
   * @public
   * @property guarda los datos en caso de tener una discapasidad
   */
  public extDat: any;

  /**
   * 
   */
  public querySubscription: Subscription;

  /**
   * 
   * @constructor
   * @param ruta administra las rutas
   * @param cookie administra las cookies
   * @param dataServ administra a graphql
   */
  constructor(private ruta: Router, private cookie: CookieService, private apollo: Apollo) { 
    this.formulario = new FormGroup({
      number: new FormControl(''),
      ci: new FormControl(false),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      nacimiento: new FormControl(),
      nacionalidad: new FormControl(''),
      residencia: new FormControl(0),
      enfermedades: new FormControl(false),
      enfTipo: new FormControl(''),
      sexo: new FormControl(''),
      estado_civil: new FormControl(''),
      discapasidad: new FormControl(false),
      disc_tipo: new FormControl(''),
      disc_nivel: new FormControl(0),
      disc_carnet: new FormControl(''),
      iden_etnica: new FormControl(''),
      mail: new FormControl('')
    });
    this.tipoSangre = ['A+','B+','O+','AB+','A-','B-','O-','AB-'];
    this.sexo = ['Masculino', 'Femenino'];
    this.disSelec = false;
    this.extDat = {};
  }

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
   * @function gnOnDestroy
   * @implements
   */
  ngOnDestroy() {
    //this.dataServ.unsubscribe();
    //this.querySubscription.unsubscribe();
  }

  /**
   * 
   * calcula la edad de la persona a registrarse
   * @function calcEdad
   * @param fechaNacimiento decha de nacimiento
   */
  private calcEdad(fechaNacimiento: Date):  number {
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  private arrayConfig (arr: Array<String>): Array<String>{
    for (const i in arr) {
      if (arr.hasOwnProperty(i)) {
        arr[i] = '"' + arr[i] + '"';
      }
    }
    return arr;
  }

  /**
   * 
   * verifica si tiene una discapasidad
   * @function selecDis
   * @param $event administrador de eventos
   */
  public selecDis($event) {
    if(!this.disSelec) {
      this.disSelec = true;
    }
  }

  /**
   * 
   * envia los datos al servidor para ser guardados en la base de datos
   * @function onSubmit
   */
  onSubmit() {

    var data = {
      identificacion: {
        ci: this.formulario.value.ci == false ? true : false,
        number: this.formulario.value.number
      },
      nombre: this.formulario.value.nombre.split(' '),
      apellido: this.formulario.value.apellido.split(' '),
      nacimiento: this.formulario.value.nacimiento,
      edad: this.calcEdad(new Date(this.formulario.value.nacimiento)),
      nacionalidad: this.formulario.value.nacionalidad,
      residencia: this.formulario.value.residencia,
      sangre: this.sangre.value,
      estado_civil: this.formulario.value.estado_civil,
      enfermedades: {
        enfermedad: this.formulario.value.enfermedades == false ? false : true,
        tipo: this.formulario.value.enfTipo ? this.formulario.value.enfTipo : ""
      },
      sexo: this.sexoform.value,
      iden_etnica: this.formulario.value.iden_etnica,
      mail: this.formulario.value.mail.split(' '),
      discapasidad: {
        discapasidad: this.formulario.value.discapasidad == false ? false : true,
        tipo: this.extDat.tipo ? this.extDat.tipo : "",
        nivel: this.extDat.nivel ? this.extDat.nivel : 0,
        carnet: this.extDat.carnet ? this.extDat.carnet : ""
      }
    };
    console.log();
    /*this.apollo.mutate({
      mutation: gql`
        mutation {
          pushOnePersonData(data: ${JSON.stringify(data)})
        }
      `
    }).subscribe(res => console.info(res), err => console.error(err));*/
    this.apollo.mutate({
      mutation: sendform,
      variables: {data}
    }).subscribe(res => console.info(res), err => console.error(err));
    /*
    this.apollo.mutate({
      mutation: gql`mutation {
        pushOnePersonData(data: {
          identificacion: {
            ci: ${this.formulario.value.ci === false ? true : false},
            number: "${this.formulario.value.number}"
          },
          nombre: [${this.arrayConfig(this.formulario.value.nombre.split(' '))}],
          apellido: [${this.arrayConfig(this.formulario.value.apellido.split(' '))}],
          nacimiento: "${this.formulario.value.nacimiento}",
          edad: ${this.calcEdad(new Date(this.formulario.value.nacimiento))},
          nacionalidad: "${this.formulario.value.nacionalidad}",
          residencia: ${this.formulario.value.residencia},
          sangre: "${this.sangre.value}",
          estado_civil: "${this.formulario.value.estado_civil}",
          enfermedades: {
            enfermedad: ${this.formulario.value.enfermedades === false ? false : true},
            tipo: "${this.formulario.value.enfTipo ? this.formulario.value.enfTipo : ""}"
          },
          sexo: "${this.sexoform.value}",
          iden_etnica: "${this.formulario.value.iden_etnica}",
          mail: [${this.arrayConfig(this.formulario.value.mail.split(' '))}],
          discapasidad: {
            discapasidad: ${this.formulario.value.discapasidad === false ? false : true},
            tipo: "${this.extDat.tipo ? this.extDat.tipo : ""}",
            nivel: "${this.extDat.nivel ? this.extDat.nivel : ""}",
            carnet: "${this.extDat.carnet ? this.extDat.carnet : ""}"
          }
        })
      }`}).subscribe(res => console.log(res), err=> console.error(err));*/
    //this.cookie.set('person_id', );
    this.ruta.navigate(['reg','dir']);
  }

  /**
   * 
   * obtiene los datos del componente hijo
   * @function getInfo
   * @param dat datos enviados desde el elemento disc
   */
  getInfo(dat) {
    this.extDat =  this.extDat ? dat : {};
  }

}
