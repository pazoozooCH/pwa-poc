import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

interface ListItem {
  text: string;
  color: string;
}

@Component({
  selector: "app-enter-leave-animation",
  templateUrl: "./enter-leave-animation.component.html",
  styleUrls: ["./enter-leave-animation.component.scss"],
  animations: [
    trigger("myInsertRemoveTrigger", [
      transition(":enter", [
        style({ opacity: 0, height: "0px" }),
        animate("200ms", style({ opacity: 1, height: "*" }))
      ]),
      transition(":leave", [
        animate("200ms", style({ opacity: 0, height: "0px" }))
      ])
    ])
  ]
})
export class EnterLeaveAnimationComponent {
  static readonly initialItems = 4;

  private items: ListItem[] = [];
  filtered = false;
  filteredItems: ListItem[] = [];

  private index = 0;

  constructor() {
    for (let i = 0; i < EnterLeaveAnimationComponent.initialItems; i++) {
      this.addItem(false);
    }
    this.filter();
  }

  addItem(refilter = true) {
    this.items.push({
      text: `Item ${this.index++}`,
      color: this.generateColor()
    });

    if (refilter) {
      this.filter();
    }
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.filter();
  }

  toggleFilter() {
    this.filtered = !this.filtered;
    this.filter();
  }

  private generateColor() {
    return "hsl(" + Math.floor(Math.random() * 361) + ",50%,75%)";
  }

  private filter() {
    if (this.filtered) {
      this.filteredItems = this.items.filter((_, index) => index % 2 === 0);
    } else {
      this.filteredItems = this.items;
    }
  }
}
