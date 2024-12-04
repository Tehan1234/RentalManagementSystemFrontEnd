import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-all-items',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './show-all-items.component.html',
  styleUrl: './show-all-items.component.css'
})
export class ShowAllItemsComponent {

  public Itemlist :any =[];

  constructor(private http: HttpClient){
    this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:8080/item/get-all-items").subscribe(data =>{
      console.log(data);
      this.Itemlist = data;
    })
  }

}
