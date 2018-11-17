import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddFriendComponent } from '../add-friend/add-friend.component';

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
      height: '400px',
      width: '600px',
    });
  }

}
