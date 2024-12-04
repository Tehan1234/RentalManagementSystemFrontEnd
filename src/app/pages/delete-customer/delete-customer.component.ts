import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Customer {
  customerId: number;
  name: string;
  contact: string;
  city: string;
}

@Component({
  selector: 'app-delete-customer',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './delete-customer.component.html',
  styleUrl: './delete-customer.component.css',
})
export class DeleteCustomerComponent {
  name: string = '';
  customer: Customer | null = null;
  customerId: number | null = null;

  constructor(private http: HttpClient) {}

  serachCustomer(): void {
    if (!this.name.trim()) {
      window.alert('Please enter a customer name to search.');
      return;
    }

    this.http.get<Customer>(`http://localhost:8080/customer/searchByName/${this.name}`).subscribe({
      next: (data) => {
        this.customer = data;
        this.customerId = this.customer.customerId;
      },
      error: () => {
        this.customer = null;
        window.alert('This Customer is not in our database.');
      },
    });
  }

  deleteCustomer(): void {
    if (!this.customerId) {
      window.alert('No customer selected to delete.');
      return;
    }

    this.http.delete(`http://localhost:8080/customer/delete-by-id/${this.customerId}`, { responseType: 'text' }).subscribe({
      next: (data) => {
        alert(data); // Display the response message from the backend
        this.clearAllFields(); // Clear all fields after deletion
      },
      error: () => {
        alert('Failed to delete the customer.');
      },
    });
  }

  clearAllFields(): void {
    this.name = '';
    this.customer = null;
    this.customerId = null;
  }
}
