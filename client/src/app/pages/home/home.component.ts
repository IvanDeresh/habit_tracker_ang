import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { YourHabitsComponent } from './components/your-habits/your-habits.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HeroComponent, YourHabitsComponent],
})
export class HomeComponent {}
