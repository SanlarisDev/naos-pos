import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersPageRoutingModule } from './customers-routing.module';
import { CustomersPage } from './customers.page';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersService } from '../services/customers.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    CustomersPage, 
    ListCustomersComponent,
    CustomerComponent
  ],
  providers: [CustomersService]
})
export class CustomersPageModule {}
