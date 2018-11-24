import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() {
    console.log('in library service');
   }

   init():void {
     console.log('in init');
   }
}
