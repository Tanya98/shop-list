import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LocalStorageResolverService, ShopService } from '../services';
import { Shop } from '../models';
import { NbDialogRef } from '@nebular/theme';

declare var ymaps: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  addNewShop: FormGroup;
  shops: Shop[] = [];
  coordinates: any;

  constructor(
    private formBilder: FormBuilder,
    private storage: LocalStorageResolverService,
    private shopService: ShopService,
    private dialogRef: NbDialogRef<FormComponent>) { }

  ngOnInit() {
    this.mapInit();

    this.addNewShop = this.formBilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required, Validators.minLength(6)]],
      schedule: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }

  get form() {
    return this.addNewShop.controls;
  }

  mapInit() {
    let that = this;

    ymaps.ready().then(() => {

      let map = new ymaps.Map('shop-coordinates', {
        center: [53.902496, 27.561481],
        zoom: 12,
        controls: []
      });

      map.events.add('click', function (e) {
        that.coordinates = e.get('coords');
        let pl = new ymaps.Placemark(that.coordinates);
        map.geoObjects.removeAll(pl);
        map.geoObjects.add(pl);
      });
    });
  }
  addShop(value) {
    const title = value.title !== '';
    const address = value.address !== '';
    const schedule = value.schedule !== '';
    if (title && address && schedule) {
      let shop = {
        id: this.shops.length + 1,
        title: value.title,
        address: value.address,
        schedule: value.schedule,
        goods: [],
        coordinates: this.coordinates
      };
      this.shops.push(shop);
      this.storage.addShop(shop);
      this.shopService.update(this.storage.getShops());
      this.dialogRef.close();
    }
  }
}
