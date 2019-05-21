import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/modules/user.model';

@Component({
  selector: 'app-serach-results',
  templateUrl: './serach-results.component.html',
  styleUrls: ['./serach-results.component.scss']
})
export class SerachResultsComponent implements OnInit {
  @Input()
  users: User;
  constructor() { }

  ngOnInit() {
  }

}
