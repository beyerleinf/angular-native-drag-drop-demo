import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  routes = [
    {
      name: 'Sorting',
      children: [
        { name: 'Simple sorting', route: '/sorting/simple' },
        { name: 'Simple sorting with copy', route: '/sorting/simple-copy' },
        { name: 'Sorting multiple lists', route: '/sorting/multi' },
      ],
    },
  ];
}
