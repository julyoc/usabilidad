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
        sendNotificacion(title: "Usabilidad", message: "Bienvenidos", user: ${client})
      }`
    });
  }

  public sendNotification(title: String, message: String, endpoint: String, auth: String, p256dh: String) {
    return this.apollo.mutate({
      mutation: gql`mutation {
        sendNotificacion(title: "${title}", message: "${message}", user: {
          endpoint: "${endpoint}",
          keys: {
            auth: "${auth}",
            p256dh: "${p256dh}"
          }
        })
      }`
    });
  }
}
