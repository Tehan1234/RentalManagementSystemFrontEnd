import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-items',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-new-items.component.html',
  styleUrl: './add-new-items.component.css'
})
export class AddNewItemsComponent {

  public item: any = {
    name: '',
    rentalPerDay: '',
    finePerDay: '',
    
  };

  constructor(private http: HttpClient) {}

  public addNewItem() {
    if (
      !this.item.name ||
      !this.item.rentalPerDay ||
      !this.item.finePerDay
    ) {
      alert('Please fill in all required fields correctly.');
      return;
    }
    this.http.post("http://localhost:8080/item/add-new-item",this.item).subscribe((data)=>{
      alert("Item added succeessfully!!!")
      this.clearAll();

    })

  }
  clearAll(){
    this.item.name = null;
    this.item.rentalPerDay=null;
    this.item.finePerDay= null;
    
  }

}
