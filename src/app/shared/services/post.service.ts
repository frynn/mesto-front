import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInterface} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly http: HttpClient) { }

  createPost(payload: Partial<PostInterface>): Observable<PostInterface>{
    return this.http.post<PostInterface>("http://localhost:3000/post", payload);
  }

  getAllPosts(): Observable<PostInterface[]>{
    return this.http.get<PostInterface[]>("http://localhost:3000/post/all-posts")
  }

  getUserPosts(): Observable<PostInterface[] | null>{
    return this.http.get<PostInterface[]>("http://localhost:3000/post/user-posts")
  }
}
