import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publications } from '../../Domain/Entities/publications.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  url = 'http://localhost:3000/publications'
  constructor(private http: HttpClient) { }

  getPublications(){
    return this.http.get<{data:Publications[]}>(this.url);
  }
  createPublication(data:Publications){
    return this.http.post<{data:Publications}>(this.url, data);
  }
}
