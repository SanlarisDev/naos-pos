import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from '../customers.model';
import { TypeVip } from 'src/app/shared/typeVip.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {

  constructor(private customerService: CustomersService) { }

  ngOnInit() {
     let customer = new Customer;
    /*customer.name = "prueba";
    customer.phone = 123123123;
    customer.vip = TypeVip.VIP;
    customer.drinks_vip = 30;
    customer.date_init_vip = new Date();
    customer.date_upd_vip = new Date();
    customer.date_end_vip = null; */
    //this.customerService.AddCustomer(customer);
  }

}
