import { TypeVip } from '../shared/typeVip.model';

export class Customer{
    id: number;
    name: string;
    phone: number;
    vip: TypeVip;
    drinks_vip: number;
    date_init_vip: Date;
    date_upd_vip: Date;
    date_end_vip: Date;
    imageUrl: string;
}