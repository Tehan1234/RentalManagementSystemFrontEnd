import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  public customer: any = {
    name: '',
    contact: '',
    city: '',
    
  };

  constructor(private http: HttpClient) {}

  public addNewCustomer() {
    if (
      !this.customer.name ||
      !this.customer.contact ||
      !this.customer.city
    ) {
      alert('Please fill in all required fields correctly.');
      return;
    }
    if (!/^07\d{8}$/.test(this.customer.contact)) {
      alert('Phone number must start with 07 and be 10 digits long.');
      return;
    }
    this.http.post("http://localhost:8080/customer/add-new-customer",this.customer).subscribe((data)=>{
      alert("Customer added succeessfully!!!")
      this.clearAll();

    })
  }
  clearAll(){
    this.customer.name = null;
    this.customer.contact=null;
    this.customer.city= null;
    
  }
}




