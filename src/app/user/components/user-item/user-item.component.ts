import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: [ './user-item.component.css' ]
})
export class UserItemComponent implements OnInit {
  @Input() user: User;

  constructor() {
  }

  ngOnInit(): void {


  }

}
