import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from '../_services';
import { User } from '../_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }

  deleteUser(id: string) {
    const user = this.users.find((x) => x.id === id);
    user.isDeleting = true;
    if (!user) return;
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => (this.users = this.users.filter((x) => x.id !== id)));
  }
}
