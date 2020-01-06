import { Component } from '@angular/core';
import { CheckForUpdateService } from './check-for-update.service';
import { LogUpdateService } from './log-update.service';
import { PromptUpdateService } from './prompt-update.service';
import { SwPush } from '@angular/service-worker';
import { PushNotificacionesService } from './push-notificaciones.service';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Autor } from './autor';

const VAPID_PUBLIC = 'BNOJyTgwrEwK9lbetRcougxkRgLpPs1DX0YCfA5ZzXu4z9p_Et5EnvMja7MGfCqyFCY4FnFnJVICM4bMUcnrxWg';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'usabilidad';
  public autores: Array<Autor> = [];
  public env: Boolean = environment.production;
  constructor (updates: CheckForUpdateService, logUpdate: LogUpdateService, prompUpdate: PromptUpdateService, private swPush: SwPush, private send: PushNotificacionesService, private cookie: CookieService) {
    if (this.swPush.isEnabled) {
      this.swPush.requestSubscription({serverPublicKey: VAPID_PUBLIC}).then(subscription => {
        console.info(subscription.toJSON());
        this.cookie.set('endpoint', subscription.toJSON().endpoint);
        this.cookie.set('keys_auth', subscription.toJSON().keys.auth);
        this.cookie.set('keys_p256dh', subscription.toJSON().keys.p256dh);
        this.send.setNotification(`{
          endpoint: "${subscription.toJSON().endpoint}",
          keys: {
            auth: "${subscription.toJSON().keys.auth}",
            p256dh: "${subscription.toJSON().keys.p256dh}"
          }
        }`).subscribe();
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
