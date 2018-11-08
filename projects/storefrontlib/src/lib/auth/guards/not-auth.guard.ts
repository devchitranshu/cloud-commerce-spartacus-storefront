import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import * as fromStore from './../store';
import { PathService } from '@spartacus/core';

@Injectable()
export class NotAuthGuard implements CanActivate {
  static GUARD_NAME = 'NotAuthGuard';

  constructor(
    private store: Store<fromStore.AuthState>,
    private router: Router,
    private pathService: PathService
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.getUserToken),
      map(token => {
        if (token.access_token) {
          this.router.navigate([this.pathService.transform('homepage')]);
        }
        return !token.access_token;
      })
    );
  }
}
