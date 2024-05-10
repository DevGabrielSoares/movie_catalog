import { Movie } from '../../enterprise/entities/movie'
import { MoviesRepository } from '../repositories/movies-repository'

interface GetMovieByCastUseCaseRequest {
  cast: string
}

interface GetMovieByCastUseCaseResponse {
  movie: Movie[]
}

export class GetMovieByCastUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute({
    cast,
  }: GetMovieByCastUseCaseRequest): Promise<GetMovieByCastUseCaseResponse> {
    const movie = await this.moviesRepository.findByCast(cast)

    if (movie.length === 0) {
      throw new Error('Movie not found')
    }

    return {
      movie,
    }
  }
}
