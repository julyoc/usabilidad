import { Component } from '@angular/core';
import { CheckForUpdateService } from './check-for-update.service';
import { LogUpdateService } from './log-update.service';
import { PromptUpdateService } from './prompt-update.service';
import { SwPush } from '@angular/service-worker';
import { PushNotificacionesService } from './push-notificaciones.service';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { AlertService } from 'ngx-alerts';
import { Autor } from './autor';

const VAPID_PUBLIC = 'BNOJyTgwrEwK9lbetRcougxkRgLpPs1DX0YCfA5ZzXu4z9p_Et5EnvMja7MGfCqyFCY4FnFnJVICM4bMUcnrxWg';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * 
   * @property guarda en un array los autores del proyecto
   */
  public autores: Array<Autor> = [];
  /**
   * 
   * @property verifica si el proyecto esta en produccion
   */
  public env: Boolean = environment.production;
  /**
   * 
   * @property nombre de la aplicacion
   */
  public title = 'usabilidad';
  /**
   * 
   * @param updates verifica los actualizaciones
   * @param logUpdate verifica los actualizaciones
   * @param prompUpdate verifica los actualizaciones
   * @param swPush obtiene los datos del navegador para las notificaciones
   * @param send servicio que envia las notificaciones
   * @param cookie permite administrar las cookies
   * @param alertService envia alerts al navegador
   */
  constructor (updates: CheckForUpdateService, logUpdate: LogUpdateService, prompUpdate: PromptUpdateService, private swPush: SwPush, private send: PushNotificacionesService, private cookie: CookieService, private alertService: AlertService) {
    if (this.swPush.isEnabled) {
      this.swPush.requestSubscription({serverPublicKey: VAPID_PUBLIC}).then(subscription => {
        console.info(subscription.toJSON());
        if (!this.cookie.check('endpoint')) {
          console.log('sdasdsa');
          this.send.setNotification(`{
            endpoint: "${subscription.toJSON().endpoint}",
            keys: {
              auth: "${subscription.toJSON().keys.auth}",
              p256dh: "${subscription.toJSON().keys.p256dh}"
            }
          }`).subscribe();
        } else {
          console.log('bvhdsds');
          this.send.sendNotification('Usabiliad', 'Bienvenidos', subscription.toJSON().endpoint, subscription.toJSON().keys.auth, subscription.toJSON().keys.p256dh).subscribe();
        }
        this.cookie.set('endpoint', subscription.toJSON().endpoint);
        this.cookie.set('keys_auth', subscription.toJSON().keys.auth);
        this.cookie.set('keys_p256dh', subscription.toJSON().keys.p256dh);
      }).catch(console.error);
    }
    this.autores.push({
      name: "Julio Castro",
      git: "julyoc",
      url: "https://github.com/julyoc"
    });
    this.autores.push({
      name: "David Chango",
      git: "dbchango",
      url: "https://github.com/dbchango"
    });
    this.autores.push({
      name: "Kevin Mina",
      git: "KevinM97",
      url: "https://github.com/KevinM97"
    });
    this.autores.push({
      name: "Jean Chachalo",
      git: "usaginotsuki",
      url: "https://github.com/usaginotsuki"
    });
    this.autores.push({
      name: "Joselin",
      git: "jl2407",
      url: "https://github.com/jl2407"
    });
  }
}
