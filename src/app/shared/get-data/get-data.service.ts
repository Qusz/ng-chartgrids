import { Injectable } from '@angular/core';

import type {
  CustomersQuery,
  GendersQuery,
  PointOfRegistrartionQuery,
  RegistrationDateQuery
} from 'src/app/models/queries.type';

import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { Observable, map } from 'rxjs';

import {
  GET_ALL_CUSTOMERS,
  GET_GENDERS,
  GET_DATES_OF_REGISTRATION,
  GET_POINTS_OF_REGISTRATION
} from 'src/app/queries';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private apollo: Apollo) {}

  getCustomers() {
    return this.getData<CustomersQuery>(GET_ALL_CUSTOMERS);
  }

  getGenders() {
    return this.getData<GendersQuery>(GET_GENDERS);
  }

  getPointsOfRegistration() {
    return this.getData<PointOfRegistrartionQuery>(GET_POINTS_OF_REGISTRATION);
  }

  getDatesOfRegistrartion() {
    return this.getData<RegistrationDateQuery>(GET_DATES_OF_REGISTRATION);
  }

  private getData<T>(query: TypedDocumentNode<unknown, unknown>): Observable<T> {
    // eslint-disable-next-line prettier/prettier
    return this.apollo.watchQuery({ query })
      .valueChanges.pipe(
        map((data) => data as T)
      );
  }
}
