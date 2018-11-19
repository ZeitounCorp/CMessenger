import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../add-friend/add-friend.component';
import { DataService } from './../data.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit {

  ref = firebase.database().ref('Users/');
  userID = firebase.auth().currentUser.uid;
  CUser;
  Users;
  Convs;
  key;
  loading = false;

  constructor(public service: DataService) {
    this.ref.on('value', resp => {
      this.Users = [];
      this.Users = snapshotToArray(resp);
      this.Users.forEach(user => {
        if (user.Keys.uid === this.userID) {
          this.CUser = user;
          this.key = user.Keys.key;
          this.loadFriends();
          this.loading = true;
        }
      });
    });
  }

  ngOnInit() {
  }

  loadFriends() {
    firebase.database().ref('Users/' + this.CUser.Keys.key + '/Conversations').on('value', resp => {
      this.Convs = [];
      this.Convs = snapshotToArray(resp);
      console.log(this.Convs);
    });
  }

  log() {
    this.service.convSelected = true;
  }
}
