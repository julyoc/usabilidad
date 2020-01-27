import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';


const consulta = gql`query findOnePersonData($ci: Boolean!, $number: String!){
  findOnePersonData(ci: $ci, number: $number){
    _id,
    mail,
    pass
  }
}`;

@Component({
  selector: 'app-set',
  template: '',
  styles: ['']
})
export class SetComponent implements OnInit, OnDestroy {

  private querysuscribcion: Subscription;
  constructor(private ruta: Router, private apollo: Apollo, private cookie: CookieService, private alertService: AlertService) { }

  ngOnInit() {
    setTimeout(() => {
      var cii = this.cookie.get('ci') === 'true' ? true : false;
      console.log(cii, this.cookie.get('number'))
      this.querysuscribcion = this.apollo.watchQuery<any>({
        query: consulta,
        variables: {
          ci: cii,
          number: this.cookie.get('number')
        }
      }).valueChanges.subscribe(({data}) => {
        this.cookie.set('_id',data.findOnePersonData._id);
        this.alertService.info({html: `
          <p>
            <strong>Usuario:</strong>${data.findOnePersonData.mail[0]}
            <br>
            <strong>Contraseña:</strong>${data.findOnePersonData.pass}
          </p>
        `});
        this.ruta.navigate(['']);
      });
    }, 500);
  }

  ngOnDestroy() {
    this.cookie.delete('ci');
    this.cookie.delete('number');
    this.querysuscribcion.unsubscribe();
  }

}
