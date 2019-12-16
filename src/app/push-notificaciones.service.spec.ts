import { TestBed } from '@angular/core/testing';

import { PushNotificacionesService } from './push-notificaciones.service';

describe('PushNotificacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PushNotificacionesService = TestBed.get(PushNotificacionesService);
    expect(service).toBeTruthy();
  });
});
