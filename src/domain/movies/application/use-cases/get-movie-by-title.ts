import { Either, left, right } from '@/core/either'
import { Movie } from '../../enterprise/entities/movie'
import { MoviesRepository } from '../repositories/movies-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

interface GetMovieByTitleUseCaseRequest {
  title: string
}

type GetMovieByTitleUseCaseResponse = Either<
  ResourceNotFoundError,
  { movie: Movie }
>

export class GetMovieByTitleUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute({
    title,
  }: GetMovieByTitleUseCaseRequest): Promise<GetMovieByTitleUseCaseResponse> {
    const movie = await this.moviesRepository.findByTitle(title)

    if (!movie) {
      return left(new ResourceNotFoundError())
    }

    return right({ movie })
  }
}
