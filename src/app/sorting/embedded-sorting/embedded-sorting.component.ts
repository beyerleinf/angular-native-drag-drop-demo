import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-embedded-sorting',
  templateUrl: './embedded-sorting.component.html',
  styleUrls: ['./embedded-sorting.component.css'],
})
export class EmbeddedSortingComponent {
  dragEnabled: boolean;

  items = [
    {
      name: 'Item 1',
      children: [
        { name: 'Subitem 1' },
        { name: 'Subitem 2' },
        { name: 'Subitem 3' },
      ],
    },
    {
      name: 'Item 2',
      children: [
        { name: 'Subitem 1' },
        { name: 'Subitem 2' },
        { name: 'Subitem 3' },
      ],
    },
    {
      name: 'Item 3',
      children: [
        { name: 'Subitem 1' },
        { name: 'Subitem 2' },
        { name: 'Subitem 3' },
      ],
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
