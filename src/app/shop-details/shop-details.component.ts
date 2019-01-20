import { Component, OnInit, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LocalStorageResolverService } from '../services/localstorage-resolver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Shop, Product } from '../models';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-shop-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {

  public shop: Shop;
  public productForm: FormGroup;
  isEdit: boolean;
  dialogRef: NbDialogRef<any>;

  constructor(
    private formBilder: FormBuilder,
    private storage: LocalStorageResolverService,
    private acivatedRoute: ActivatedRoute,
    private router: Router,
    private dialogService: NbDialogService,
    private cd: ChangeDetectorRef,
  ) {

  }

  ngOnInit() {

    this.productForm = this.formBilder.group({
      id: [''],
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.maxLength(2)]],
    });
    let param = this.acivatedRoute.snapshot.params['id'];

    if (param) {
      let id = Number(param);
      let shop = this.storage.getShop(id);
      if (shop) {
        this.shop = shop;
      }
      else {
        this.router.navigate(['']);
      }
    }
  }

  get form() {
    return this.productForm.controls;
  }

  showOnEdit(dialog: TemplateRef<any>, product: Product) {

    this.productForm.setValue({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price
    });

    this.dialogRef = this.dialogService.open(dialog);

    this.isEdit = true;
  }

  showOnAdd(dialog: TemplateRef<any>) {

    this.productForm.setValue({
      id: '',
      title: '',
      description: '',
      price: ''
    });

    this.dialogRef = this.dialogService.open(dialog);

    this.isEdit = false;
  }

  do(product: Product) {
    if (this.isEdit)
      this.edit(product);
    else
      this.add(product);

    this.dialogRef.close();
  }

  add(product: Product) {

    product.id = this.shop.goods.length + 1;

    this.shop.goods.push(product);

    this.updateStorageState(this.shop);

    this.shop = Object.assign(this.shop, {});

    this.cd.detectChanges(); //it seems that change detection was broken (not sure)
  }

  edit(product: Product) {
    this.shop.goods.forEach((p, index) => {
      if (p.id === product.id)
        this.shop.goods[index] = product;
    });

    this.updateStorageState(this.shop);

    this.shop = Object.assign(this.shop, {});

    this.cd.detectChanges(); //it seems that change detection was broken (not sure)
  }

  updateStorageState(shop: Shop) {

    let shops = this.storage.getShops();

    shops.forEach(s => {
      if (s.id === this.shop.id)
        s.goods = this.shop.goods;
    });

    this.storage.setShops(shops);

  }
}
