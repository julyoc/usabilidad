import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
/**
 * @class PushNotificacionesService
 * 
 * se enccarga de enviar notificaciones nativas al usario
 */
export class PushNotificacionesService {

  /**
   * 
   * @param apollo coneccion a graphql
   */
  constructor(private apollo: Apollo) { }

  /**
   * 
   * @function setNotification
   * @param client datos del navegador al que se envia la notificacion 
   * @returns susbcription
   */
  public setNotification(client: any) {
    return this.apollo.mutate({
      mutation: gql`mutation{
        setNotificacion(data: ${client}),
        sendNotificacion(title: "Usabilidad", message: "Bienvenidos", user: ${client})
      }`
    });
  }

  /**
   * 
   * envia una notificacion personalizada al usuario
   * @function sendNotification 
   * @param title Titulo de la notificacion
   * @param message Contenido de la notificacion
   * @param endpoint dato del navegador
   * @param auth dato del navegador
   * @param p256dh dato del navegador
   */
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
