import { Component, Input, OnInit } from '@angular/core';
import { HeaderButtons } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() activeButtons: HeaderButtons;
  
  constructor() { }

  ngOnInit() {
    if(!this.activeButtons){
      this.activeButtons = {
        add: true,
        edit: true,
        delete: true,
        list: true
      };
    }
  } 

}
