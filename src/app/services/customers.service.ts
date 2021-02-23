import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject, from } from 'rxjs';

import { Customer } from '../customers/customers.model';
import { AngularFireAuth } from '@angular/fire/auth';

const COLLECTION = 'customers';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {  
  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth ) {}

  AddCustomer(customer: Customer){
    this.db.collection(COLLECTION).add({
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

  GetCustomer(id: string){
    return this.db.collection(COLLECTION).doc(id).snapshotChanges();
  }

  GetCustomersList(){
    let res = this.db.collection(COLLECTION);
    return res.valueChanges({ idField: 'id' });
  }

  UpdateCustomer(customer: Customer) {
    console.log('UpdateCustomer',customer);
    this.db.collection(COLLECTION).doc(customer.id).set(customer);
  }

  DeleteUser(id: string) {
    this.db.collection(COLLECTION).doc(id).delete();
  }

}
