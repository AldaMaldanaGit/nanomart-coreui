import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Products } from '../model/nanomart';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    //local base_path = 'http://localhost:3000/products';
    base_path = 'https://dev-api.nanomart.id/v1/';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    // Handle API errors
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
        } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
        'Something bad happened; please try again later.');
    };

    // Begin Nanomart API
    getProductList(): Observable<any> {
        return this.http
        .get(this.base_path + 'admin/products')
        .pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    createProduct(item): Observable<Products[]> {
        return this.http
        .post<Products[]>(this.base_path + 'admin/products', JSON.stringify(item))
        .pipe(
            retry(2),
            catchError(this.handleError)
        )
    }

    getListProductById(id): Observable<any>{
        return this.http
        .get(this.base_path +  'admin/products' + '/' + id)
        .pipe(
            retry(2),
            catchError(this.handleError)
        );
    }

    deleteProductById(id) {
        return this.http
        .delete(this.base_path + 'admin/products/' + id)
        .pipe(
            retry(2),
            catchError(this.handleError)
        )
    }
}