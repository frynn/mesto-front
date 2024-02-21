import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {mergeMap, Observable, Subject} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class ImageUploadService{
  constructor(private readonly http: HttpClient, private readonly sanitizer: DomSanitizer) {
  }

  uploadImage(
    formData: FormData,
  ): Observable<{ originalname: string; filename: string }> {
    return this.http.post<{ originalname: string; filename: string }>(
      'http://localhost:3000/post/upload',
      formData,
    );
  }

  getImage(imageName: string): Observable<SafeUrl> {
    return this.http
      .get(`http://localhost:3000/post/${imageName}`, {
        responseType: 'blob',
      })
      .pipe(
        mergeMap((blob) => {
          const sub$ = new Subject<SafeUrl>();

          let reader = new FileReader();
          reader.onload = () => {
            const safe: any = this.sanitizer.bypassSecurityTrustUrl(
              reader.result?.toString() || '',
            );
            sub$.next(safe);
            sub$.complete();
          };
          reader.readAsDataURL(blob);

          return sub$;
        }),
      );
  }
}
