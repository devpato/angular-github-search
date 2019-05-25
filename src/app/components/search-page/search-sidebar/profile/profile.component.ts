import { Component, OnInit, Input } from '@angular/core';
import { UserFullProfile } from 'src/app/shared/models/user-full-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input()
  selectedUser: UserFullProfile;
  constructor() {}

  ngOnInit() {}
}
