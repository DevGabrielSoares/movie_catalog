import { Movie } from '../../enterprise/entities/movie'
import { MoviesRepository } from '../repositories/movies-repository'

interface GetNewMovieUseCaseResponse {
  movie: Movie
}

export class GetNewMovieUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute(): Promise<GetNewMovieUseCaseResponse> {
    const movie = await this.moviesRepository.findAll()

    if (movie.isNew === false) {
      throw new Error('Movie not found')
    }

    if (movie.isNew) {
      return { movie }
    }

    return null
  }
}
