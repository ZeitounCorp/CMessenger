import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-log',
  templateUrl: './modal-log.component.html',
  styleUrls: ['./modal-log.component.scss']
})
export class ModalLogComponent implements OnInit {

  login = true;
  signup = false;

  constructor() { }

  ngOnInit() {
  }

  sign() {
   this.signup = true;
   this.login = false;
  }

  log() {
    this.login = true;
    this.signup = false;
  }

}
