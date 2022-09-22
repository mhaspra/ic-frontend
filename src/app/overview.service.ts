import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Overview} from "./api/v1";

@Injectable({providedIn: 'root'})
export class OverviewService {
  private apiUrl = 'http://localhost:32197/api/v1/overview';

  constructor(
    private http: HttpClient) { }

  getOverview(): Observable<Overview> {
    return this.http.get<Overview>(this.apiUrl)
      .pipe(
        tap(_ => this.log('fetched customer')),
        catchError(this.handleError<Overview>('getCustomers', {}))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
