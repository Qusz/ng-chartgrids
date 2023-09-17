import { Injectable } from '@angular/core';

import { Customer, AllUsersGrid } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class GridDataProcessorService {
  processAllCustomers(data: Customer[]): AllUsersGrid[] {
    const result: AllUsersGrid[] = data.map((customer) => {
      return {
        id: customer.id,
        name: customer.name,
        gender: customer.gender ?? 'Unknown',
        phone: customer.phoneNumber,
        location: customer.location ?? 'Unknown',
        registeredAt: customer.pointOfRegistration
      };
    });

    return result;
  }
}
