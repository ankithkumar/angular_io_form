import { Component, OnInit } from '@angular/core';
import { LibraryService } from './../../services/library/library.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  users;
  tempUsersVals = [];
  constructor(private libraryService: LibraryService) {
    console.log('favorite constructor');
  }

  ngOnInit() {
    console.log('favorite init');
    this.users = this.libraryService.getData();
  }

  edit(url) {
    this.libraryService.edit(url);
    this.users = this.libraryService.getData();
    console.log(this.users);
  }

  cancelEdit(index) {
    console.log(this.tempUsersVals);
    this.tempUsersVals.splice(index, 1);
    this.users[index].editing = false;
  }

  addIndexVal(index) {
    if (!this.tempUsersVals[index].index) {
      this.tempUsersVals[index].index = index;
    }
  }
  
  initArray(index) {
    if (this.tempUsersVals[index] === undefined) {
      this.tempUsersVals[index] = {};
      console.log('returning empty object');
    }
  }

  addBookUrl(evt, index) {
    console.log(this.tempUsersVals[index]);
    this.initArray(index);
    this.tempUsersVals[index].bookUrl = evt.target.value;
    this.addIndexVal(index);
  }

  addAuthorName(evt, index) {
    console.log(this.tempUsersVals[index]);
    this.initArray(index);
    this.tempUsersVals[index].authorName = evt.target.value;
    this.addIndexVal(index);
  }

  addBookName(evt, index) {
    console.log(this.tempUsersVals[index]);
    this.initArray(index);
    this.tempUsersVals[index].bookName = evt.target.value;
    this.addIndexVal(index);
  }

  saveData(index) {
    setTimeout(() => {
        console.log('saving data for index ', index);
        if (this.tempUsersVals[index]) {
          console.log(this.tempUsersVals[index]);
          this.libraryService.updateUser(index, this.tempUsersVals[index]);
          this.users = this.libraryService.getData();
          let delObj = this.tempUsersVals.splice(index, 1);
          console.log('deleted objects is ', delObj);
        } else {
          console.log('You have not updated it!');
        }
    });
  }
}
