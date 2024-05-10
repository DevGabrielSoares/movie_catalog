import { Movie } from '../../enterprise/entities/movie'
import { MoviesRepository } from '../repositories/movies-repository'

interface EditMovieUseCaseRequest {
  movieId: string
  title: string
  director: string
  genre: string[]
  release: Date
  synopsis: string
  cast: string[]
}

interface EditMovieUseCaseResponse {
  movie: Movie
}

export class EditMovieUseCase {
  constructor(private movieRepository: MoviesRepository) {}

  async execute({
    movieId,
    title,
    director,
    genre,
    release,
    synopsis,
    cast,
  }: EditMovieUseCaseRequest): Promise<EditMovieUseCaseResponse> {
    const movie = await this.movieRepository.findById(movieId)

    if (!movie) {
      throw new Error('Movie not found.')
    }

    movie.title = title
    movie.director = director
    movie.synopsis = synopsis
    movie.cast = cast
    movie.release = release
    movie.genre = genre

    await this.movieRepository.save(movie)

    return {
      movie,
    }
  }
}
