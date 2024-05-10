import { Movie } from '../../enterprise/entities/movie'
import { MoviesRepository } from '../repositories/movies-repository'

interface GetMovieByTitleUseCaseRequest {
  title: string
}

interface GetMovieByTitleUseCaseResponse {
  movie: Movie
}

export class GetMovieByTitleUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute({
    title,
  }: GetMovieByTitleUseCaseRequest): Promise<GetMovieByTitleUseCaseResponse> {
    const movie = await this.moviesRepository.findByTitle(title)

    if (!movie) {
      throw new Error('Movie not found')
    }

    return {
      movie,
    }
  }
}
