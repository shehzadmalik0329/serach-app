import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string = '';

  enableML = false;

  movies: Movie[];

  totalResults: string;

  processingTime: string;

  showMore = false;

  movie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  onSearch() {
    this.showMore = false; 
    this.movieService.getMovieByName(this.searchText, this.enableML)
    .subscribe((data: {})=>{
      this.totalResults = data['num_results'];
      this.processingTime = data['processing_time'];
      this.movies = data['response'];
      
    }); 
  }

  onShowMore(selectedMovie: any) {
    this.showMore = true;
    this.movie = selectedMovie;
  }

}
