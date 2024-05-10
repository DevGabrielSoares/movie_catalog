import { Movie } from '../../enterprise/entities/movie'
import { MoviesRepository } from '../repositories/movies-repository'

interface GetMovieByDirectorUseCaseRequest {
  director: string
}

interface GetMovieByDirectorUseCaseResponse {
  movie: Movie[]
}

export class GetMovieByDirectorUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute({
    director,
  }: GetMovieByDirectorUseCaseRequest): Promise<GetMovieByDirectorUseCaseResponse> {
    const movie = await this.moviesRepository.findByDirector(director)

    if (movie.length === 0) {
      throw new Error('Movie not found')
    }

    return {
      movie,
    }
  }
}
