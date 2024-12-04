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
  selector: 'app-update-customer',
  standalone: true,
  imports: [FormsModule,CommonModule, NgIf],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {
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
        this.customerTemp = data;
      },
      error: () => {
        this.customer = null; 
        window.alert('This Customer is not in our database.'); 
      },
    });
  }

  customerTemp: Customer = {
    customerId: 0,
    name: '',
    contact: '',
    city: '',
    
  };



  

  public updateCustomer(){
    this.http.put("http://localhost:8080/customer/update-customer",this.customerTemp).subscribe((data)=>{
      alert("customer updated succeessfully!!!")
    })
  }


}
