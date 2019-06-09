import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-multi-sorting',
  templateUrl: './multi-sorting.component.html',
  styleUrls: ['./multi-sorting.component.css'],
})
export class MultiSortingComponent {
  items = [
    'Sugar Ray Robinson',
    'Muhammad Ali',
    'George Foreman',
    'Joe Frazier',
    'Jake LaMotta',
    'Joe Louis',
    'Jack Dempsey',
    'Rocky Marciano',
    'Mike Tyson',
    'Oscar De La Hoya',
  ];

  team1 = [];
  team2 = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
