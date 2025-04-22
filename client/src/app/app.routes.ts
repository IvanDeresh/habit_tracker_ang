// app.routes.ts
import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./pages/sign-up/sign-up.component').then(
            (m) => m.SignUpComponent
          ),
      },
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./pages/sign-in/sign-in.component').then(
            (m) => m.SignInComponent
          ),
      },
    ],
  },
];
