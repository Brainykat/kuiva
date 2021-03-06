import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  constructor(http: HttpClient) {
    super('http://jsonplaceholder.typicode.com/posts', http);
   }
}
