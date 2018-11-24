import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library/library.service';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.scss']
})
export class UserActionComponent implements OnInit {
  constructor(private libraryService: LibraryService) {
    console.log('in useraction ', libraryService);
  }

  ngOnInit() {
    this.libraryService.init();
  }

}
