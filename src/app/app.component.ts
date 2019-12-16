import { Component } from '@angular/core';
import { CheckForUpdateService } from './check-for-update.service';
import { SwPush } from '@angular/service-worker';
import { PushNotificacionesService } from './push-notificaciones.service';

const VAPID_PUBLIC = 'BNOJyTgwrEwK9lbetRcougxkRgLpPs1DX0YCfA5ZzXu4z9p_Et5EnvMja7MGfCqyFCY4FnFnJVICM4bMUcnrxWg';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usabilidad';
  constructor (updates: CheckForUpdateService, private swPush: SwPush, private send: PushNotificacionesService) {
    if (this.swPush.isEnabled) {
      this.swPush.requestSubscription({serverPublicKey: VAPID_PUBLIC}).then(subscription => {
        console.log(subscription.toJSON());
        this.send.setNotification(`{
          endpoint: "${subscription.toJSON().endpoint}",
          keys: {
            auth: "${subscription.toJSON().keys.auth}",
            p256dh: "${subscription.toJSON().keys.p256dh}"
          }
        }`).subscribe();
      }).catch(console.error);
    }
  }
}
