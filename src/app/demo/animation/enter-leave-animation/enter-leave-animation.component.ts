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
        animate("300ms", style({ opacity: 1, height: "*" }))
      ]),
      transition(":leave", [
        animate("200ms", style({ opacity: 0, height: "0px" }))
      ])
    ])
  ]
})
export class EnterLeaveAnimationComponent {
  static readonly initialItems = 4;

  items: ListItem[] = [];

  private index = 0;

  constructor() {
    for (let i = 0; i < EnterLeaveAnimationComponent.initialItems; i++) {
      this.addItem();
    }
  }

  addItem() {
    this.items.push({
      text: `Item ${this.index++}`,
      color: this.generateColor()
    });
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  private generateColor() {
    return "hsl(" + Math.floor(Math.random() * 361) + ",50%,75%)";
  }
}
