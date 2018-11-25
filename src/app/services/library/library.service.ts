import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  users = [];
  constructor() {
    console.log('in library service');
   }

   saveData(bookUrl, authorName, bookName) {
     const obj = {
       'bookUrl': bookUrl,
       'authorName': authorName,
       'bookName': bookName
     };
     this.users.push(obj);
     console.log(this.users);
   }

   getData() {
    return this.users;
   }
}
