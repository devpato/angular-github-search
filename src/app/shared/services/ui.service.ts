import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private tabSelected = new BehaviorSubject<boolean>(false);
  dataTabSelected = this.tabSelected.asObservable();
  constructor() {}

  setTabSelected(flag: boolean): void {
    this.tabSelected.next(flag);
  }
}
