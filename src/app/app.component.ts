import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'C-Messenger';
  logged = false;

  constructor() {
    firebase.initializeApp(environment.firebase);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  }


  ngOnInit() {
  }
}
