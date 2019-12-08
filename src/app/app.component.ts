import { Component } from '@angular/core';
import { CheckForUpdateService } from './check-for-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usabilidad';
  constructor (updates: CheckForUpdateService) { }
}
