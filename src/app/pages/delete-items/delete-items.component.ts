import { CommonModule } from '@angular/common';
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
  selector: 'app-delete-items',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './delete-items.component.html',
  styleUrl: './delete-items.component.css'
})
export class DeleteItemsComponent {

  name: string = '';
  item: Item | null = null;
  itemId: number | null = null;

  constructor(private http: HttpClient) {}

  serachItem(): void {
    if (!this.name.trim()) {   
      window.alert('Please enter a item name to search.');
      return;
    }

    this.http.get<Item>(`http://localhost:8080/item/searchByName/${this.name}`).subscribe({
      next: (data) => {
        this.item = data;
        this.itemId = this.item.itemId;
       
      },
      error: () => {
        this.item = null; 
        window.alert('This Item is not in our database.'); 
      },
    });
  }

  deleteItem(): void {
    if (!this.itemId) {
      window.alert('No Item selected to delete.');
      return;
    }

    this.http.delete(`http://localhost:8080/item/delete-by-id/${this.itemId}`, { responseType: 'text' }).subscribe({
      next: (data) => {
        alert(data); 
        this.clearAllFields(); 
      },
      error: () => {
        alert('Failed to delete the Item.');
      },
    });
  }

  clearAllFields(): void {
    this.name = '';
    this.item = null;
    this.itemId = null;
  }

}
