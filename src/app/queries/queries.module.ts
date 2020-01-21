import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueriesComponent } from './queries/queries.component';
import { QueriesRoutingModule } from './queries-routing.module';
import { AccountModule } from '../account/account.module';


@NgModule({
  declarations: [QueriesComponent],
  imports: [
    CommonModule,
    QueriesRoutingModule,
    AccountModule
  ]
})
export class QueriesModule { }
