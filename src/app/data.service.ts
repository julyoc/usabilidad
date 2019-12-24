import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private querySubscription: Subscription;
  constructor(private apollo: Apollo) { }
  
  public query (graphqlCode: String, cb: (data: any) => void): void {
    this.querySubscription = this.apollo.watchQuery({
      query: gql`query {
        ${graphqlCode}
        }`
    }).valueChanges.subscribe(({data}) => {
      cb(data);
    });
  }

  public unsubscribe (): void {
    this.querySubscription.unsubscribe();
  }

  public mutation (graphqlCode: String): void {
    this.apollo.mutate({
      mutation: gql`mutation {
        ${graphqlCode}
      }`
    }).subscribe();
  }

}
