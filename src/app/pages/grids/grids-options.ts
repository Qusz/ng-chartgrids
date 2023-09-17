import { GridOptions } from 'ag-grid-community';

export const allCustomersGridOptions: GridOptions = {
  columnDefs: [
    { field: 'id' },
    { field: 'name' },
    { field: 'gender' },
    { field: 'phone' },
    { field: 'location' },
    { field: 'registeredAt' }
  ],
  defaultColDef: {
    sortable: true,
    filter: true,
    resizable: true
  },
  pagination: true
};
