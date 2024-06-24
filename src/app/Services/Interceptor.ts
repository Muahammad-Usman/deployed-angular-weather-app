// auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer YOUR_AUTH_TOKEN`  
      }
    });

    
    console.log('Interceptor - Outgoing Request:');

    return next.handle(authReq).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
    
            console.log('Interceptor - Incoming Response:');
          }
        }
      ),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          
          console.error('Interceptor - 400 Bad Request Error:', error.message);
          
        } else {
          
          console.error('Interceptor - Other Error:', error.message);
        }

        
        return throwError(() => new Error(error.message));
      })
    );
  }
}
