import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-simple-sorting',
  templateUrl: './simple-sorting.component.html',
  styleUrls: ['./simple-sorting.component.css'],
})
export class SimpleSortingComponent {
  items = ['Coffee', 'Orange Juice', 'Red Wine', 'Coca Cola', 'Water'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
