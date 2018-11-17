import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  logged_in = false;

  constructor() { }

  ngOnInit() {
    this.check();
  }

  check() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.logged_in = true;
        alert('Vous allez être redirigés vers le chat');
      } else {
        this.logged_in = false;
        alert('Nous n\'avons pas réuissi à vous identifier, veuillez saisir vos informations de connexion');
      }
    });
  }

  login(user) {
    firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(authData => {
      this.logged_in = true;
        alert('Vous allez être redirigés vers le chat');
    }, error => {
      console.log(error);
      this.logged_in = false;
      alert('Nous n\'avons pas réuissi à vous identifier, veuillez saisir vos informations de connexion');
    });
  }

}
