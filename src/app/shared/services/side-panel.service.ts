import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidePanelService {
  private openPanelSubject = new Subject<boolean>();
  openPanel$ = this.openPanelSubject.asObservable();

  constructor() { }

  togglePanel(open: boolean): void {
    this.openPanelSubject.next(open);
  }
}
