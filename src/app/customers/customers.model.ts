import { TypeVip } from '../shared/typeVip.model';
import { Timestamp } from '@firebase/firestore-types';

export class Customer{
    id: string;
    name: string;
    phone: number;
    vip: number;
    drinks_vip: number;
    date_init_vip: Timestamp;
    date_upd_vip: Timestamp;
    date_end_vip: Timestamp;
    imageUrl: string;
}