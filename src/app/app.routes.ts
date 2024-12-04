import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { SearchCustomerComponent } from './pages/search-customer/search-customer.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './pages/delete-customer/delete-customer.component';
import { GetAllCustomerComponent } from './pages/get-all-customer/get-all-customer.component';
import { AddNewItemsComponent } from './pages/add-new-items/add-new-items.component';
import { SearchItemsComponent } from './pages/search-items/search-items.component';
import { UpdateItemsComponent } from './pages/update-items/update-items.component';
import { DeleteItemsComponent } from './pages/delete-items/delete-items.component';
import { ShowAllItemsComponent } from './pages/show-all-items/show-all-items.component';

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
    {
        path: 'addNewItems',
        component: AddNewItemsComponent,  
    },
    {
        path: 'searchItems',
        component: SearchItemsComponent,  
    },
    {
        path: 'updateItem',
        component: UpdateItemsComponent,  
    },
    {
        path: 'deleteItems',
        component: DeleteItemsComponent,  
    },
    {
        path: 'showAllItems',
        component: ShowAllItemsComponent,  
    },
    {
        path: 'showAllItems',
        component: ShowAllItemsComponent,  
    },
];
