import { Component,ViewEncapsulation,OnInit } from '@angular/core';
import { MovieService } from 'app/service/movieService';
import { IMovie } from 'app/interfaces/movie-list';
import { IMovieModel } from 'app/interfaces/movie-list';
//declare const alertify:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
  providers:[MovieService]
})
export class AppComponent implements OnInit {
  movieList:IMovie[]=[];
  movieModel:IMovieModel;
  movieDetail:IMovie;
  constructor(private _movieServ:MovieService){}
ngOnInit(){
this.movieModel={
  movieName:'',
  dateOfRelease:null,
  rating:'',
  description:''
  
};
}
addMovie(values){
  this.movieDetail={
    movieName:values.movieName,
    dateOfRelease:values.dateOfRelease,
    rating:values.rating,
    description:values.description
  };
this._movieServ.addMovie(this.movieDetail);
//alertify.notify('Cricketer Added Successfully', 'success', 3);
this.movieList=this._movieServ.getMovie();

};


}
