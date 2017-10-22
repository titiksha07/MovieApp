import { Injectable } from '@angular/core';
import {IMovie} from './../interfaces/movie-list';
@Injectable()
export class MovieService
{
    movieList:IMovie[]=[];
    addMovie(movieDetail){
     this.movieList.unshift(movieDetail);
    }
    getMovie():IMovie[]{
    return this.movieList;
    }

}