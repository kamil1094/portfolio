import { Component, ElementRef, Inject, OnInit, trigger, keyframes, animate, state, style, transition, ViewChild, HostListener} from '@angular/core';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { WindowRef } from '../../shared/window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('arrowState', [
      state('down', style({
        'opacity': '1'
      })),
      state('up', style({
        transform: 'rotate(180deg)',
        'position': 'fixed',
        'right': '20px',
        'bottom': '20px',
        'border': '2px solid #8980fe',
        'color': '#8980fe',
        'opacity': '1'
      })),
      transition('down <=> up', [
        animate(400, keyframes([
          style({
            transform: 'rotate(90deg)',
            'opacity': '0'
          })
        ]))  
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  
  state = 'down';
  arrowLink = '#technology';

  constructor(private pageScrollService: PageScrollService, private windowRef: WindowRef, private elementRef: ElementRef) {
    PageScrollConfig.defaultScrollOffset = 80;
    PageScrollConfig.defaultDuration = 800;
   }

  ngOnInit() {

  }

  @HostListener('window:scroll', ['$event'])
  handleArrowStates(e){
    if(this.windowRef.nativeWindow.pageYOffset > 400)
      {
        this.arrowLink = '#home';
        this.state = 'up';
      }
      if(this.windowRef.nativeWindow.pageYOffset <= 400) {
        this.arrowLink = '#technology';
        this.state = 'down';
      }
      //console.log(this.windowRef.nativeWindow.pageYOffset);
  }


}
