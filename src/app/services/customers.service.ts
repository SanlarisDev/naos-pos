import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable, Subject, from } from 'rxjs';
import * as firebase from 'firebase/app';

import { Customer } from '../customers/customers.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {
  customersRef: AngularFireList<Customer>;
  customerRef: AngularFireObject<Customer>;
  
  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth ) {
    this.customersRef = db.list('customers');
    this.customerRef = db.object('customers');
   }

  AddCustomer(customer: Customer){
    this.customerRef.set({
      id: null,
      name: customer.name,
      phone: customer.phone,
      vip: customer.vip,
      drinks_vip: 0,
      date_init_vip: new Date(),
      date_upd_vip: new Date(),
      date_end_vip: null,
      imageUrl: customer.imageUrl
    })
  }

  GetCustomer(id: string): Observable<Customer>{
    this.customerRef = this.db.object(`customers/${id}`);
    return this.customerRef.valueChanges();
  }

  GetCustomersList(){
    this.customersRef = this.db.list(`customers`);
    return this.customersRef.valueChanges();
  }

  UpdateCustomer(customer: Customer) {
    this.customerRef.update({
      id: customer.id,
      name: customer.name,
      phone: customer.phone,
      vip: customer.vip,
      drinks_vip: customer.drinks_vip,
      date_init_vip: customer.date_init_vip,
      date_upd_vip: customer.date_upd_vip,
      date_end_vip: customer.date_end_vip
    })
  }

  DeleteUser(id: string) {
    this.customerRef = this.db.object(`customers/${id}`);
    this.customerRef.remove();
  }

}
