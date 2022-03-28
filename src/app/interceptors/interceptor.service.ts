import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const auth_token = 'YztU+CP3sOMH3pC9wy4rigECl7BVMvqXHsY8a2wORVFfUGI1Q8Nm2M7e6borqJjL';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+auth_token
    });

    const reqClone = req.clone({headers});

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  
  }

  manejarError(error:HttpErrorResponse){
    console.log('sucedio un error');
    console.log('sucedio un e');
    return throwError(()=>new Error('Error personalizado'));
  }
}
