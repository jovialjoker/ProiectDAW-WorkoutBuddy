import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PendingExerciseGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const params = new URLSearchParams(location.search);
    const token = params?.get('token');

    const storageToken = sessionStorage.getItem('token');

    if (!token && !storageToken) {
      alert('Not authenticated');
      location.href = 'https://localhost:3000';
      return false;
    }

    if (storageToken == null) {
      sessionStorage.setItem('token', token!);
    }

    if (location.href != 'http://localhost:4200/pending-exercises') {
        location.href = 'http://localhost:4200/pending-exercises';
      }

    return true;
  }
}
