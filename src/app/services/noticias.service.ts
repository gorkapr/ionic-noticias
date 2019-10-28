import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-Key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  private ejecutarQuery(query: string) {
    query = apiUrl + query;
    return this.http.get<RespuestaTopHeadlines>(query, {headers});
  }

  getTopHeadlines() {
    //return this.http.get(environment.apiKey);
    // return this.http.get<RespuestaTopHeadlines>(apiUrl + `?country=us&apiKey=` + apiKey);
    return this.ejecutarQuery('/top-headlines?country=us');
  }

  getTopHeadLinesCategoria(categoria: string) {
    // return this.http.get<RespuestaTopHeadlines>(apiUrl + `?country=de&category=` + categoria + `&apiKey=` + apiKey);
    return this.ejecutarQuery('/top-headlines?country=us&category=' + categoria);
  }
}
