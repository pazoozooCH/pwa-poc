import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { map, tap } from "rxjs/operators";

interface Message {
  date: firebase.firestore.Timestamp;
  value: string;
}

@Component({
  selector: "app-firebase-firestore",
  templateUrl: "./firebase-firestore.component.html",
  styleUrls: ["./firebase-firestore.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirebaseFirestoreComponent {
  static messageLimit = 3;

  FirebaseFirestoreComponent = FirebaseFirestoreComponent;

  messages: AngularFirestoreCollection<
    Message
  > = this.angularFirestore.collection<Message>("messages", ref =>
    ref.orderBy("date", "desc").limit(FirebaseFirestoreComponent.messageLimit)
  );

  messages$: Observable<Message[]> = this.messages.valueChanges();

  constructor(private angularFirestore: AngularFirestore) {}

  async addMessage() {
    await this.messages.add({
      value: "PWA Message",
      date: firebase.firestore.Timestamp.now()
    });
  }
}
