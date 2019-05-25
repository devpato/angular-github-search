import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UiService } from 'src/app/shared/services/ui.service';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input()
  users: any;
  $tabSelected: Observable<boolean>;
  flag = false;

  constructor(private uiServivce: UiService) {}

  ngOnInit() {
    this.isTabSelected();
  }

  isTabSelected() {
    this.uiServivce.dataTabSelected.subscribe(flag => (this.flag = flag));
  }

  swapTab() {
    this.uiServivce.setTabSelected(!this.flag);
  }
}
