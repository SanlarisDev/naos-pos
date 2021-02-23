import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Customer } from '../customers.model';
import { UtilsService } from 'src/app/services/utils.service';
import { NameVip, TypeVip } from 'src/app/shared/typeVip.model';
import firebase from 'firebase'

export const MAXDRINKSVIP = 30;

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss'],
  providers: [UtilsService]
})
export class ListCustomersComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data$: Observable<any[]>;
  vipActive: boolean;
  maxDrinksVip: number = MAXDRINKSVIP;
  itemEditing: number;
  customerEditing: Customer;
  optionsVip = TypeVip;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private customerService: CustomersService,
    private utils: UtilsService) { }
    
  ngOnInit() { 
    this.data$ = this.customerService.GetCustomersList();
    this.data$.forEach(customer => {
      let a = customer.values();
    }); 
  }

  getVipLvl(vipLvl: number, endDateVip: firebase.firestore.Timestamp){
    let aux = TypeVip[0];
    if(this.utils.isVipActive(endDateVip)){
      aux = TypeVip[vipLvl];
    }

    let res = NameVip[aux];
    return res;
  }

  onClickEdit(customer: Customer, index: number){
    if(this.itemEditing && this.itemEditing != index){
      this.itemEditing = null;
      this.customerEditing = null;
    }
    this.itemEditing = index;
    this.customerEditing = {...customer};
  }

  onClickSave(customerEdited: Customer){
    console.log('CustomerEdited', customerEdited);
    this.customerService.UpdateCustomer(customerEdited);
    this.itemEditing = null;
    this.customerEditing = null;
  }

  isEditActive(index: number){
    return this.itemEditing === index;
  }

  incrementQty(){
    this.customerEditing.drinks_vip += 1;
  }

  decrementQty(){
    this.customerEditing.drinks_vip -= 1;
  }

  updateDateVip(){
    let upd_vip = new Date();
    let end_vip = new Date();
    end_vip.setMonth(upd_vip.getMonth()+1);
    this.customerEditing.date_upd_vip = firebase.firestore.Timestamp.fromDate(upd_vip);
    this.customerEditing.date_end_vip = firebase.firestore.Timestamp.fromDate(end_vip);
    console.log('Fecha cambiada');
  }
}
