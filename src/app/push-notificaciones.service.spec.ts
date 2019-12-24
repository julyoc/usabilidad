import { TestBed } from '@angular/core/testing';

import { PushNotificacionesService } from './push-notificaciones.service';
import { ApolloModule } from 'apollo-angular';

describe('PushNotificacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ApolloModule
    ]
  }));

  it('should be created', () => {
    const service: PushNotificacionesService = TestBed.get(PushNotificacionesService);
    expect(service).toBeTruthy();
  });
});
