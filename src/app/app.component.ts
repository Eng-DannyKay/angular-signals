import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 userStatus = signal('');
 goOnline() {
  this.userStatus.set('online');
}
goOffline() {
  this.userStatus.set('offline');
}

  toggleStatus(){
    this.userStatus.update(curent => curent ==='online' ?'offline':'online')
  }
}
