import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Customer {
  customerId: number;
  name: string;
  contact: string;
  city:string;
  
  
}

@Component({
  selector: 'app-search-customer',
  standalone: true,
  imports: [FormsModule,CommonModule, NgIf],
  templateUrl: './search-customer.component.html',
  styleUrl: './search-customer.component.css'
})
export class SearchCustomerComponent {

  name: string = '';
  customer: Customer | null = null;

  constructor(private http: HttpClient) {}

  serachCustomer(): void {
    if (!this.name.trim()) {   
      window.alert('Please enter a visitor name to search.');
      return;
    }

    this.http.get<Customer>(`http://localhost:8080/customer/searchByName/${this.name}`).subscribe({
      next: (data) => {
        this.customer = data; 
      },
      error: () => {
        this.customer = null; 
        window.alert('This Customer is not in our database.'); 
      },
    });
  }

}
