import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.access_token;
    if (token){
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}`}
      });
    }
    return next.handle(req).pipe(
      catchError((err) => this.handleAuthError(err) )
    );
  }

  private handleAuthError(
    err: HttpErrorResponse
  ): Observable<HttpEvent<unknown>> {
    if (err.status === 401 || err.status === 403) {
      this.authService.logout()
      return throwError(err);
    }
    return throwError(err);
  }
}
