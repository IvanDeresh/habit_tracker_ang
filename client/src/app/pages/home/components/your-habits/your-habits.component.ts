import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-your-habits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './your-habits.component.html',
  styleUrls: ['./your-habits.component.scss'],
})
export class YourHabitsComponent {
  habits = [
    {
      title: 'Drink More Water',
      description: 'Stay hydrated and improve your energy levels.',
    },
    {
      title: 'Read Every Day',
      description: 'Just 10 minutes can build your knowledge and calm.',
    },
    {
      title: 'Exercise Regularly',
      description: 'Boost mood, energy, and health — one step at a time.',
    },
    {
      title: 'Wake Up Early',
      description: 'Start your day with purpose and clarity.',
    },
    {
      title: 'Gratitude Journaling',
      description: 'Appreciate the little things and shift your mindset.',
    },
  ];
}
