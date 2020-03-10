import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

interface ListItem {
  originalIndex: number;
  value: string;
}

@Component({
  selector: "app-drag-and-drop",
  templateUrl: "./drag-and-drop.component.html",
  styleUrls: ["./drag-and-drop.component.scss"]
})
export class DragAndDropComponent implements OnInit {
  lists = [
    { name: "Some List", list: DragAndDropComponent.createList() },
    {
      name: "Another List",
      list: DragAndDropComponent.createList("Another Card", 15)
    }
  ];

  private static createList(prefix = "Card", length = 10): ListItem[] {
    return Array.from(
      Array(length),
      (e, i) =>
        ({
          originalIndex: i,
          value: `${prefix} ${i + 1}`
        } as ListItem)
    );
  }

  constructor() {}

  ngOnInit(): void {}

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
