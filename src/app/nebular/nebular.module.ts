import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbInputModule, NbListModule, NbCardModule, NbUserModule, NbMenuModule, NbActionsModule, NbSpinnerModule, NbDialogModule, NbDialogService, NbThemeModule, NbDialogRef } from '@nebular/theme';
import { NbMenuInternalService, NbMenuService } from '@nebular/theme/components/menu/menu.service';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
    NbMenuModule,
    NbActionsModule,
    NbSpinnerModule,
    NbDialogModule.forRoot(),
    NbThemeModule.forRoot({ name: 'cosmic' }),
  ],
  exports: [
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
    NbMenuModule,
    NbActionsModule,
    NbSpinnerModule,
    NbDialogModule,
  ],
  providers: [NbSidebarService, NbMenuInternalService, NbMenuService, NbDialogService],
})
export class NebularModule { }
