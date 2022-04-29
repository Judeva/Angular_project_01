export const environment = {
    production: false,
    BASE_URL: 'http://localhost:3000',
    CUSTOMERS_BASE_URL:'http://localhost:3000/customers/',

    CUSTOMER: {
        GET_ALL_CUSTOMERS: 'list',
        GET_CUSTOMER:'view/',
        EDIT_CUSTOMER:'edit/',
        DELETE_CUSTOMER:'delete/',
        SEARCH_CUSTOMER:'search',
    },
    LOAN: {
        GET_ALL_LOANS: 'list',
        GET_LOAN:'view',
        EDIT_LOAN:'edit',
        DELETE_LOAN:'delete',
        SEARCH_LOAN:'view',
    }
  };