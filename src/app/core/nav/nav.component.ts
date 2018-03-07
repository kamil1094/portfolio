import { Component, OnInit, Inject, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { WindowRef } from '../../shared/window.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(private pageScrollService: PageScrollService, private windowRef: WindowRef) {
    PageScrollConfig.defaultScrollOffset = 80;
    PageScrollConfig.defaultDuration = 800;
   }

  ngOnInit() {
  }


}
