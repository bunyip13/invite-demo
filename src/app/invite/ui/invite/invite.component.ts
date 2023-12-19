import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InviteService } from '../../data-access/invite.service';

@Component({
  selector: 'app-invite',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.css',
})
export class InviteComponent {
  #invitesService = inject(InviteService);
  invites = this.#invitesService.invites;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(3),
  ]);

  addEmail(email: FormControl): void {
    this.#invitesService.addInvite(email.getRawValue());
  }

  removeInvite(email: string): void {
    this.#invitesService.removeInvite(email);
  }

  invite(): void {
    this.#invitesService.clear();
  }
}
