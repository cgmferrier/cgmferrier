import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidePanelService } from '../shared/services/side-panel.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnDestroy, OnInit {
  panelOpen = false;
  subs = new Subscription();

  @HostBinding('class.open') get open() { return this.panelOpen; }

  constructor(private sidePanelService: SidePanelService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.subs.add(
      this.sidePanelService.openPanel$.subscribe(open => this.panelOpen = open),
    );
  }

  closePanel(): void {
    this.sidePanelService.togglePanel(false);
  }
}
