import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactsComponent } from '../contacts/contacts.component';
import { SettingsComponent } from '../settings/settings.component';
import * as firebase from 'firebase';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) {
   }

  ngOnInit() {
  }

  openContacts() {
    const dialogRef = this.dialog.open(ContactsComponent, {
      height: '600px',
      width: '400px',
    });
  }

  openSettings() {
    const dialogRef = this.dialog.open(SettingsComponent, {
      height: '400px',
      width: '600px',
    });
  }

  loggout() {
    firebase.auth().signOut();
  }

}
