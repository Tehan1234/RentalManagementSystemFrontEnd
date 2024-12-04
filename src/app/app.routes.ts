import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { SearchCustomerComponent } from './pages/search-customer/search-customer.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './pages/delete-customer/delete-customer.component';
import { GetAllCustomerComponent } from './pages/get-all-customer/get-all-customer.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,  
    },
    {
        path: 'addNewCustomer',
        component: AddCustomerComponent,  
    },
    {
        path: 'searchCustomer',
        component: SearchCustomerComponent,  
    },
    {
        path: 'updateCustomer',
        component: UpdateCustomerComponent,  
    },
    {
        path: 'deleteCustomer',
        component: DeleteCustomerComponent,  
    },
    {
        path: 'getAllCustomer',
        component: GetAllCustomerComponent,  
    },
];
