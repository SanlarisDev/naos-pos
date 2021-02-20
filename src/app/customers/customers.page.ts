import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  viewList = {
    list: true,
    details: false,
    edit: false
  };

  constructor() { }

  ngOnInit() {
  }

}
