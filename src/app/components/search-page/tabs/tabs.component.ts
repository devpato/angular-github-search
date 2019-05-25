import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UiService } from 'src/app/shared/services/ui.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy {
  @Input()
  users: User[];
  $tabSelected: Observable<boolean>;
  flag = false;
  $tabSelectedSubscription: Subscription;

  constructor(private uiServivce: UiService) {}

  ngOnInit(): void {
    this.isTabSelected();
  }

  isTabSelected(): void {
    this.$tabSelectedSubscription = this.uiServivce.dataTabSelected.subscribe(
      flag => (this.flag = flag)
    );
  }

  ngOnDestroy() {
    if (this.$tabSelectedSubscription) {
      this.$tabSelectedSubscription.unsubscribe();
    }
  }
}
