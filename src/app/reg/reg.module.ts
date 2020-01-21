import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegComponent } from './reg/reg.component';
import { RegRoutingModule } from './reg-routing.module';
import { DirComponent } from './dir/dir.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from '../account/account.module';
import { DiscComponent } from './reg/disc/disc.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from '../graphql.module';


@NgModule({
  declarations: [RegComponent, DirComponent, ContactComponent, DiscComponent],
  imports: [
    CommonModule,
    RegRoutingModule,
    ReactiveFormsModule,
    AccountModule,
    HttpClientModule,
    GraphQLModule
  ]
})
export class RegModule { }
