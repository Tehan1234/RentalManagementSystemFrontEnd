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
  selector: 'app-search-items',
  standalone: true,
  imports: [FormsModule,CommonModule,NgIf],
  templateUrl: './search-items.component.html',
  styleUrl: './search-items.component.css'
})
export class SearchItemsComponent {
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
      },
      error: () => {
        this.item = null; 
        window.alert('This Item is not in our database.'); 
      },
    });
  }

}
