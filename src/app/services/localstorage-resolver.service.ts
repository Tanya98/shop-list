import { Injectable } from '@angular/core';
import { Shop } from '../models';


@Injectable({
    providedIn: 'root'
})

export class LocalStorageResolverService {

    constructor() { }

    setShops(shop: Shop[]) {

        localStorage.setItem('shops', JSON.stringify(shop));
    }

    getShops(): Shop[] {
        let local = localStorage.getItem('shops');
        if (local) {
            let shops = JSON.parse(local) as Shop[];

            return shops;
        }

        return null;
    }

    getShop(id: number) {
        let shops = this.getShops();

        if (shops) {
            let filtered = shops.filter(x => x.id == id);

            if (filtered)
                return filtered[0];
        }

        return null;
    }

    addShop(shop: Shop) {
        let shops = this.getShops();
        if (shops) {
            shop.id = shops.length + 1;
            shops.push(shop);
            localStorage.setItem('shops', JSON.stringify(shops));
        }
    }
}