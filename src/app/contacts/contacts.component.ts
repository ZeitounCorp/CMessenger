import {
  Component,
  OnInit
} from '@angular/core';
import * as firebase from 'firebase';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import {
  snapshotToArray
} from '../add-friend/add-friend.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  ref = firebase.database().ref('Users/');
  userID = firebase.auth().currentUser.uid;
  CUser;
  Users;
  Friends;
  key;
  loading = false;

  constructor(public dialogRef: MatDialogRef < ContactsComponent > ) {
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

  ngOnInit() {}

  loadFriends() {
    firebase.database().ref('Users/' + this.CUser.Keys.key + '/Friends').child('myFriends').on('value', resp => {
      this.Friends = [];
      this.Friends = snapshotToArray(resp);
    });
  }

  close() {
    this.dialogRef.close();
  }
  create_Conv(username, picture, key) {
    // tslint:disable-next-line:prefer-const
    let newData = firebase.database().ref(`Users/${this.CUser.Keys.key}/Conversations`);
    newData.push({
      chatroom: username,
      image: picture,
      messages: [''],
      friendKey: key,
      created: Date()
    });
    this.dialogRef.close();
  }
}
