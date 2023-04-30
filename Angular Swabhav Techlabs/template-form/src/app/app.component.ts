import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-form';
  value = 100;
  items = ["first","Second","Third"];

  display="List";

  addItem(item:any){
    this.items.push(item);
  }
}
