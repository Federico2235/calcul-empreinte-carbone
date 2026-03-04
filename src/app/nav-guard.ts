import {CanActivateFn, RedirectCommand, Router} from '@angular/router';
import {inject} from '@angular/core';
import {User} from './service/user';

export const navGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const user = inject(User)

  if (user.isLogged()) {
    return true;
  }else {
    return new RedirectCommand(
      router.createUrlTree(['/']))
  }

};
