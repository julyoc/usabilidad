import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
/**
 * @class PromptUpdateService
 */
export class PromptUpdateService {

  /**
   * 
   * @param updates verifica las actulizaciones de la pwa
   */
  constructor(updates: SwUpdate) { 
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }
}
