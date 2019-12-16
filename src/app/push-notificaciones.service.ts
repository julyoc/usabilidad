import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class PushNotificacionesService {

  constructor(private apollo: Apollo) { }

  public setNotification(client: any) {
    return this.apollo.mutate({
      mutation: gql`mutation{
        setNotificacion(data: ${client}),
        sendNotificacion(title: "Usabilidad", message: "Se han aceptado las Notificaciones", user: ${client})
      }`
    });
  }
}
