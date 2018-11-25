import { Component, OnInit } from '@angular/core';
import { LibraryService } from './../../services/library/library.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  users;
  constructor(private libraryService: LibraryService) {
    console.log('favorite constructor');
  }

  ngOnInit() {
    console.log('favorite init');
    this.users = this.libraryService.getData();
  }
}
