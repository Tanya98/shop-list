import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shop } from '../models';

@Injectable({ providedIn: 'root' })
export class ShopService {

    public shops$: BehaviorSubject<Shop[]>;

    constructor() {
        this.shops$ = new BehaviorSubject([]);
    }

    public update(shops: Shop[]) {
        this.shops$.next(shops);
    }
}