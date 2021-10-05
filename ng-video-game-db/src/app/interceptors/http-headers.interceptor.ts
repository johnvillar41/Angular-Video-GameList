import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'fae8f01125msh4a2fa7a89a605dbp1010f0jsn8b75e50328af',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: 'f5109f12079149c5af45cdbb7848c45e',
      }
    });
    return next.handle(req);
  }
}
