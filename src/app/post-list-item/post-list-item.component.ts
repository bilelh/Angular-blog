import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post:Post
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIt: number;
  @Input() postCreatedAt: Date;

  positive:boolean;

  constructor(private postsService:PostsService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.postLoveIt > 0) {
      return 'green';
    } else if (this.postLoveIt < 0) {
      return 'red';
    }
  }

  onIncrease() {
    this.postsService.handleLoveIt(this.post, 1)
  }

  onDecrease() {
    this.postsService.handleLoveIt(this.post, -1)
  }

  onDelete() {
    if (confirm('Etes-vous sûr de vouloir supprimer ce post ?')) {
      this.postsService.deletePost(this.post)
    } else {
      return null
    }
  }

}
