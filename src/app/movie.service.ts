import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MovieService {
    
    private url = 'http://localhost:5000/';

    constructor(private http: HttpClient) {}

    getMovieByName(name: string, enableML: boolean): Observable<any> {

        const requestMovie = {
            "query":name,
            "ml":enableML
        }
        return this.http.post(this.url,requestMovie);
    }
}