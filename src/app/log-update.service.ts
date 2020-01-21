import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
/**
 * 
 * @class LogUpdateService
 */
export class LogUpdateService {

  /**
   * 
   * @param updates Verifica la vercion del pwa
   */
  constructor(updates: SwUpdate) { 
    updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
