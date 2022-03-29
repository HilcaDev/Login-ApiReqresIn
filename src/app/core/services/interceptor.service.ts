import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { LocalStorageService } from './local-storage.service';
import { AuthenticationDto } from '../../domain/login/login.dto';

@Injectable()
export class HttpConfigService implements HttpInterceptor {

  constructor(private localStorage:LocalStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const getToken: AuthenticationDto = this.localStorage.getItem('userSession');
    let request = req;

    if (getToken) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${getToken.token}`
        }
      })
    }

    return next.handle(request);
  }
}

export const interceptorProvider: Provider = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpConfigService, multi: true }
]
