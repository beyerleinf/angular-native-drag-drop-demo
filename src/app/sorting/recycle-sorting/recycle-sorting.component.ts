import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-recycle-sorting',
  templateUrl: './recycle-sorting.component.html',
  styleUrls: ['./recycle-sorting.component.css'],
})
export class RecycleSortingComponent {
  items = ['Coffee', 'Orange Juice', 'Red Wine', 'Coca Cola', 'Water'];
  recycleBin = [];

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
