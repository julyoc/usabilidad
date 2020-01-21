import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { AlertModule } from 'ngx-alerts';
import { AlertService } from 'ngx-alerts';
import { HomeComponent } from './home/home.component';
import { PushNotificacionesService } from './push-notificaciones.service';
import { QueriesModule } from './queries/queries.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountModule } from './account/account.module';
import { RegModule } from './reg/reg.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    GraphQLModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
    QueriesModule,
    RegModule,
    ReactiveFormsModule,
    AccountModule
  ],
  providers: [CookieService, PushNotificacionesService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
