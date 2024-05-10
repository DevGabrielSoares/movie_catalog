import { Movie } from '../../enterprise/entities/movie'
import { MoviesRepository } from '../repositories/movies-repository'

interface GetMovieByGenreUseCaseRequest {
  genre: string
}

interface GetMovieByGenreUseCaseResponse {
  movie: Movie[]
}

export class GetMovieByGenreUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute({
    genre,
  }: GetMovieByGenreUseCaseRequest): Promise<GetMovieByGenreUseCaseResponse> {
    const movie = await this.moviesRepository.findByGenre(genre)

    if (movie.length === 0) {
      throw new Error('Movie not found')
    }

    return {
      movie,
    }
  }
}
