import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'customers',
        loadChildren: () => import('../customers/customers.module').then(m => m.CustomersPageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('../orders/orders.module').then(m => m.OrdersPageModule)
      },
/*       {
        path: 'orders',
        loadChildren: () => import('../orders/orders.module').then(m => m.ordersPageModule)
      }, */
      {
        path: 'explore-container',
        loadChildren: () => import('../shared/explore-container/explore-container.module').then(m => m.ExploreContainerComponentModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TabsPageRoutingModule {}
