import { Injectable } from '@angular/core';
import { Timestamp } from '@firebase/firestore-types';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  isVipActive(endDateVip: Timestamp){
    let isActive = -1;
    if(endDateVip){
      let today = new Date();
      isActive = endDateVip.toDate().getTime() - today.getTime();
    }
    return  isActive >= 0;
  }

}
