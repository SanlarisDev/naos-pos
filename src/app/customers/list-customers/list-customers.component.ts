import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Customer } from '../customers.model';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss'],
})
export class ListCustomersComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data$: Observable<Customer[]>;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private customerService: CustomersService) { }

  

/*   loadData(event){
      setTimeout(() => {
        console.log('Done');
        event.target.complete();
  
        if (this.data.length == 1000) {
          event.target.disabled = true;
        }
      }, 500);
    }

    
    toggleInfiniteScroll() {
      this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    } */

  ngOnInit() { 
    this.data$ = this.customerService.GetCustomersList();
  }

}
