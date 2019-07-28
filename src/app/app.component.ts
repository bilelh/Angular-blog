import { Component } from '@angular/core';
import { Post } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    new Post('Mon Premier Post','contenue du post 1', 3 , new Date),
    new Post('Mon Second Post','contenue du post 2', -3 , new Date),
    new Post('Mon troisieme Post','contenue du post 3', 0 , new Date)
  ];

}
