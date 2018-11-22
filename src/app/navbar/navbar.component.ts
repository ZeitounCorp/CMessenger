import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddFriendComponent } from '../add-friend/add-friend.component';
import { AddChatComponent } from '../add-chat/add-chat.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModal() {
    const dialogRef = this.dialog.open(AddFriendComponent, {
      height: '600px',
      width: '400px',
    });
  }

  newChat() {
    const dialogRef = this.dialog.open(AddChatComponent, {
      height: '600px',
      width: '400px',
    });
  }

}
