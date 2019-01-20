import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageResolverService } from '../services/localstorage-resolver.service';
import { LoaderService } from '../services/loader.service';
import { ShopService } from '../services';
import { Shop } from '../models';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { FormComponent } from '../form/form.component';
import { Router } from '@angular/router';

declare var ymaps: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  shops: Shop[] = [];
  loading$: Observable<boolean>;
  shops$: Observable<Shop[]>;
  dialogRef: NbDialogRef<FormComponent>;

  constructor(
    private loaderService: LoaderService,
    private shopService: ShopService,
    private storage: LocalStorageResolverService,
    private dialogService: NbDialogService,
    private router: Router
  ) {

    this.loading$ = loaderService.loading$.asObservable();
    this.shops$ = shopService.shops$.asObservable();
  }

  ngOnInit() {

    this.loaderService.show();

    let data = this.storage.getShops();

    if (data) {
      this.shops = data;
      this.mapInit();
      this.shopService.update(data);
      this.loaderService.hide();
    }
  }

  mapInit() {
    let minskMapCenter = [53.902496, 27.561481];
    ymaps.ready().then(() => {
      let map = new ymaps.Map('map', {
        center: minskMapCenter,
        zoom: 12,
        controls: []
      });

      this.shops.forEach(shop => {
        let pl = new ymaps.Placemark(shop.coordinates, {
          balloonContent: shop.address,
          hintContent: shop.title
        });
        map.geoObjects.add(pl);
      });
    });
  }
  details(shop) {
    this.router.navigate(['detail/' + shop.id]);
  }
  open() {
    let hasBackdrop = true;
    this.dialogRef = this.dialogService.open(FormComponent, { hasBackdrop });
  }
}

