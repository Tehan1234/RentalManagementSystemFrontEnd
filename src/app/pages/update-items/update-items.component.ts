import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Item {
  itemId: number;
  name: string;
  rentalPerDay: string;
  finePerDay:string;
  
  
}

@Component({
  selector: 'app-update-items',
  standalone: true,
  imports: [FormsModule,CommonModule,NgIf],
  templateUrl: './update-items.component.html',
  styleUrl: './update-items.component.css'
})
export class UpdateItemsComponent {

  name: string = '';
  item: Item | null = null;

  constructor(private http: HttpClient) {}

  serachItem(): void {
    if (!this.name.trim()) {   
      window.alert('Please enter a item name to search.');
      return;
    }

    this.http.get<Item>(`http://localhost:8080/item/searchByName/${this.name}`).subscribe({
      next: (data) => {
        this.item = data;
        this.itemTemp = data; 
      },
      error: () => {
        this.item = null; 
        window.alert('This Item is not in our database.'); 
      },
    });
  }

  itemTemp: Item = {
    itemId: 0,
    name: '',
    rentalPerDay: '',
    finePerDay: '',
    
  };

  public updateItem(){
    this.http.put("http://localhost:8080/item/update-item",this.itemTemp).subscribe((data)=>{
      alert("Item updated succeessfully!!!")
    })
  }



}
