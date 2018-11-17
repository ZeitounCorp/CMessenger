import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';
import { FormControl } from '@angular/forms';
import { snapshotToArray } from '../add-friend/add-friend.component';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from '../data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  ref = firebase.database().ref('Users/');
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  autoCompleteList: any[];
  searchOption = [];
  Users;

  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelectedOption = new EventEmitter();

  constructor(public dataService: DataService) {
    this.ref.on('value', resp => {
      this.Users = [];
      this.Users = snapshotToArray(resp);
    });
  }

  ngOnInit() {
    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    });
  }

  autoCompleteExpenseList(input) {
    const categoryList = this.filterCategoryList(input);
    this.autoCompleteList = categoryList;
  }

  filterCategoryList(val) {
    const categoryList = [];
    if (typeof val !== 'string') {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.Users.filter(user => user.Info.username.toLowerCase().indexOf(val.toLowerCase()) !== -1)
      : this.Users;
  }

  displayFn(user) {
    const k = user ? user.Info.username : user;
    return k;
  }

  removeOption(option) {

    const index = this.dataService.searchOption.indexOf(option);
    if (index > 0 || index === 0) {
      this.dataService.searchOption.splice(index, 1);
    this.focusOnPlaceInput();
    }

    this.onSelectedOption.emit(this.dataService.searchOption);
  }

  filterPostList(event) {
    const users = event.source.value;
    if (!users) {
      this.dataService.searchOption = [];
    } else {

      this.dataService.searchOption.push(users);
      this.onSelectedOption.emit(this.dataService.searchOption);
    }
    this.focusOnPlaceInput();
  }

  focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }

}


