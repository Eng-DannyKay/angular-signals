import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 userStatus = signal<'online' | 'away' | 'offline'>('offline');
  notificationsEnabled = computed(() => this.userStatus() === 'online');


statusmessage = computed(()=>{
  const status = this.userStatus();
  switch(status){
    case 'online':
    return 'Available for meeting and messages';
    case 'away':
    return 'Temporarily away, will respond soon';
    case 'offline':
    return 'Not available, check back later';
    default:
    return 'Status unknown';
  }
});
  isWithinWorkingHours = computed(() => {
    const now = new Date();
    const hour = now.getHours();
    const isWeekday = now.getDay() > 0 && now.getDay() <6;
    return isWeekday && hour >=9 && hour < 17 && this.userStatus() !== 'offline';
  })

  goOnline() {
    this.userStatus.set('online');
  }

  goAway() {
    this.userStatus.set('away');
  }


  goOffline() {
    this.userStatus.set('offline');
  }

  toggleStatus() {
    const current = this.userStatus();
    switch (current) {
      case 'offline':
        this.userStatus.set('online');
        break;
      case 'online':
        this.userStatus.set('away');
        break;
      case 'away':
        this.userStatus.set('offline');
        break;
    }
  }
}
