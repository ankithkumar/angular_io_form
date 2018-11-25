import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library/library.service';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.scss']
})
export class UserActionComponent implements OnInit {
  bookUrl: String;
  bookName: String;
  authorName: String;
  constructor(private libraryService: LibraryService) {
    console.log('in useraction ', libraryService);
  }

  ngOnInit() {
  }

  enterBookUrl(evt) {
    this.bookUrl = evt.target.value;
  }

  enterAuthorDetail(evt) {
    this.authorName = evt.target.value;
  }

  enterBookName(evt) {
    this.bookName = evt.target.value;
  }

  checkData() {
   if (this.bookUrl && this.authorName && this.bookName) {
     this.libraryService.saveData(this.bookUrl, this.authorName, this.bookName);
   } else {
      console.log('enter data');
   }
 }
}
