import {Component, OnInit} from '@angular/core';
import {PostInterface} from "../shared/interfaces/post.interface";
import {PostService} from "../shared/services/post.service";
import {map, mergeAll, mergeMap, of, toArray} from "rxjs";
import {ImageUploadService} from "../shared/services/image-upload.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{

  posts: PostInterface[] | null = [];
  constructor(private readonly postService: PostService, private readonly imageUploadService: ImageUploadService) {
  }
  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().pipe(
      mergeAll(),
      mergeMap((post) => {
        if (post.picture) {
          return this.imageUploadService.getImage(post.picture).pipe(
            map((imagePreview) => ({ ...post, imagePreview }))
          );
        }
        return of(post);
      }),
      toArray()
    ).subscribe({
      next: (posts) => {
        this.posts = posts;
      }
    });
  }
}
