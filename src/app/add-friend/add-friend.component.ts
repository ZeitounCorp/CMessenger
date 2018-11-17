import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent implements OnInit {

  ref = firebase.database().ref('Users/');
  Users;
  user;
  userID = firebase.auth().currentUser.uid;
  CUser;
  filteredPostsList = [];
  searchOption = [];

  constructor(public dataService: DataService) {
    this.ref.on('value', resp => {
      this.Users = [];
      this.Users = snapshotToArray(resp);
      this.Users.forEach(user => {
        if (user.Keys.uid === this.userID) {
          this.CUser = user;
        }
      });
    });
   }

  ngOnInit() {
  }

  onSelectedFilter(e) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0) {
      this.user = this.filteredListOptions();
    } else {
      this.user = this.Users;
    }

  }

  filteredListOptions() {
    const users = this.Users;
    this.filteredPostsList = [];
    // tslint:disable-next-line:prefer-const
    for (let user of users) {
      // tslint:disable-next-line:prefer-const
      for (let options of this.dataService.searchOption) {
        if (options.Info.username === user.Info.username) {
          this.filteredPostsList.push(user);
        }
      }
    }
    return this.filteredPostsList;
  }

  addFriend(user) {
    // tslint:disable-next-line:prefer-const
    let edT = firebase.database().ref(`Users/${this.CUser.Keys.key}/Friends`).child('myFriends');
    edT.push({
      user: user
    }).then(success => {
      alert(`Ami ajouté: ${user.Info.username}`);
      });
  }

}

export const snapshotToArray = snapshot => {
  // tslint:disable-next-line:prefer-const
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    // tslint:disable-next-line:prefer-const
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
