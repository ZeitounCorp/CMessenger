import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChatComponent } from './chat/chat.component';
import { MenuComponent } from './menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './data.service';
import { ModalLogComponent } from './modal-log/modal-log.component';
import { SettingsComponent } from './settings/settings.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import {
  MatIconModule,
  MatInputModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatFormFieldModule
} from '@angular/material';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ChatComponent,
    MenuComponent,
    ContactsComponent,
    DetailsComponent,
    NavbarComponent,
    ModalLogComponent,
    SettingsComponent,
    AddFriendComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  entryComponents: [
    AddFriendComponent
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
