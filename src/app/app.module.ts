import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NebularModule } from './nebular/nebular.module';
import { FormComponent } from './form/form.component';
import { LocalStorageResolverService } from './services';
import { SHOPS } from './data';

function dbInit(storageService: LocalStorageResolverService) {

  let data = storageService.getShops();

  if (!data)
    storageService.setShops(SHOPS);

  return () => { };
}

@NgModule({
  entryComponents: [FormComponent],
  declarations: [
    AppComponent,
    ShopDetailsComponent,
    HomepageComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NebularModule

  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: dbInit, deps: [LocalStorageResolverService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
