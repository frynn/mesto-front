import {Component} from '@angular/core';
import {PostInterface} from "../shared/interfaces/post.interface";
import {FormBuilder, Validators} from "@angular/forms";
import {PostService} from "../shared/services/post.service";
import {Router} from "@angular/router";
import {ImageUploadService} from "../shared/services/image-upload.service";

@Component({
  selector: 'app-post-spot',
  templateUrl: './post-spot.component.html',
  styleUrls: ['./post-spot.component.scss']
})
export class PostSpotComponent {

  constructor(
    private readonly fb: FormBuilder,
    private readonly postService: PostService,
    private readonly router: Router,
    private readonly imageService: ImageUploadService) {
  }

  posts: PostInterface[] | null = [];


  postForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    link: ['', Validators.required],
    picture: ['picture', Validators.required]
  });

  createPost() {
    const payload = this.postForm.getRawValue();
    this.postService.createPost(payload).subscribe({
      next: () => this.router.navigateByUrl('/feed'),
      error: (err) => console.error(err),
    });
  };

  onLoadImage(event: Event) {
    const formdata = new FormData();
    const target = <HTMLInputElement>event.target;
    if (target.files) {
      formdata.append('file', target.files[0]);
      this.imageService.uploadImage(formdata).subscribe({
        next: (result) => this.postForm.patchValue({
          picture: result.filename,
        }),
        error: (err) => console.error(err),
      });
    }
  }

}
