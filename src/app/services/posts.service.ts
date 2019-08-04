import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts = [
    new Post('Mon Premier Post', 'contenue du post 1', 3, new Date),
    new Post('Mon Second Post', 'contenue du post 2', -3, new Date),
    new Post('Mon troisieme Post', 'contenue du post 3', 0, new Date)
  ];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(title: string, content: string) {
    const postObject = {
      loveIt: 0,
      title: '',
      content: '',
      createdAt: new Date
    };
    postObject.title = title;
    postObject.content = content;
    this.posts.push(postObject);
    this.emitPosts();
  }

  deletePost(post:Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postl) => {
        if (postl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  handleLoveIt(post:Post, value:number) {
    const postIndexToHandle = this.posts.findIndex(
      (postl) => {
        if (postl === post) {
          return true;
        }
      }
    );
    this.posts[postIndexToHandle].loveIt = this.posts[postIndexToHandle].loveIt + value ;
    this.emitPosts();
  }
}
