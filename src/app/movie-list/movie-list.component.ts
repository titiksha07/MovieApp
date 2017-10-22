import { Component, OnInit,Input } from '@angular/core';
import { IMovie } from './../interfaces/movie-list';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
 
  @Input() movieDetail;
  movieList:IMovie;
  constructor() { }

  ngOnInit() {
  }

}
