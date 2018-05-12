import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive =  false;
  title = 'Lorem Ipsum is simply dummy text of the printing';

  addFevroit() {
    this.isActive = !this.isActive;
  }

}
