import { Injectable } from '@angular/core';

import type { CustomersQuery } from 'src/app/models';

import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';

import { GET_ALL_CUSTOMERS } from 'src/app/queries/get-all';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private apollo: Apollo) {}

  getCustomers(): Observable<CustomersQuery> {
    return this.apollo
      .watchQuery({
        query: GET_ALL_CUSTOMERS
      })
      .valueChanges.pipe(map((data) => data as CustomersQuery));
  }
}
