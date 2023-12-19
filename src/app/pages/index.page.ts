import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddressBookService } from '../address-book/data-access/address-book.service';
import { AddressBookComponent } from '../address-book/ui/address-book/address-book.component';
import { InviteService } from '../invite/data-access/invite.service';
import { InviteComponent } from '../invite/ui/invite/invite.component';

export const routeMeta: RouteMeta = {
  title: 'Home page component',
  canActivate: [() => true],
  providers: [AddressBookService, InviteService],
};

@Component({
  standalone: true,
  imports: [RouterLink, AddressBookComponent, InviteComponent],
  template: `
    <div class="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
      <app-address-book class="w-7/12" />
      <app-invite class="w-5/12" />
    </div>
  `,
})
export default class HomeComponent {}
