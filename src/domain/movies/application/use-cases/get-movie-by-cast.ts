import { Either, right } from '@/core/either'
import { Movie } from '../../enterprise/entities/movie'
import { MoviesRepository } from '../repositories/movies-repository'

interface GetMovieByCastUseCaseRequest {
  cast: string
}

type GetMovieByCastUseCaseResponse = Either<null, { movie: Movie[] }>

export class GetMovieByCastUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute({
    cast,
  }: GetMovieByCastUseCaseRequest): Promise<GetMovieByCastUseCaseResponse> {
    const movie = await this.moviesRepository.findByCast(cast)

    return right({ movie })
  }
}
