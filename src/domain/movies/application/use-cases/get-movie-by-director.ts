import { Either, right } from '@/core/either'
import { Movie } from '../../enterprise/entities/movie'
import { MoviesRepository } from '../repositories/movies-repository'

interface GetMovieByDirectorUseCaseRequest {
  director: string
}

type GetMovieByDirectorUseCaseResponse = Either<null, { movie: Movie[] }>

export class GetMovieByDirectorUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute({
    director,
  }: GetMovieByDirectorUseCaseRequest): Promise<GetMovieByDirectorUseCaseResponse> {
    const movie = await this.moviesRepository.findByDirector(director)

    return right({ movie })
  }
}
