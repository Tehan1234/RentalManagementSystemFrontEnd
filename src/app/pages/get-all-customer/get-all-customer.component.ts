import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-all-customer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './get-all-customer.component.html',
  styleUrl: './get-all-customer.component.css'
})
export class GetAllCustomerComponent {
  public customerList :any =[];

  constructor(private http: HttpClient){
    this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:8080/customer/get-all-customers").subscribe(data =>{
      console.log(data);
      this.customerList = data;
    })
  }

}
