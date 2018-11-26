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
       'bookName': bookName,
       'editing': false
     };
     this.users.push(obj);
     console.log(this.users);
   }

   getData() {
    return this.users;
   }

   updateUser(index, user) {
     if (user.bookUrl) {
       this.users[index].bookUrl = user.bookUrl;
     }
     if (user.authorName) {
       this.users[index].authorName = user.authorName;
     }
     if (user.bookName) {
       this.users[index].bookName = user.bookName;
     }
     this.users[index].editing = false;
   }

   edit(bookUrl) {
     this.users.forEach(user => {
       if (bookUrl === user.bookUrl) {
         user.editing = !user.editing;
         console.log('editing ', user);
       }
     });
   }
}
