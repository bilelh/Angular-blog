import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './model/post';
import { PostsService } from './services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  posts: any[];
  postsSubscription: Subscription;

  /*posts = [
    new Post('Mon Premier Post','contenue du post 1', 3 , new Date),
    new Post('Mon Second Post','contenue du post 2', -3 , new Date),
    new Post('Mon troisieme Post','contenue du post 3', 0 , new Date)
  ];*/

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
