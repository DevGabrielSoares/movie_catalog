import { Either, left, right } from '@/core/either'
import { MoviesRepository } from '../repositories/movies-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

interface DeleteMovieUseCaseRequest {
  movieId: string
}

type DeleteMovieUseCaseResponse = Either<ResourceNotFoundError, null>

export class DeleteMovieUseCase {
  constructor(private movieRepository: MoviesRepository) {}

  async execute({
    movieId,
  }: DeleteMovieUseCaseRequest): Promise<DeleteMovieUseCaseResponse> {
    const movie = await this.movieRepository.findById(movieId)

    if (!movie) {
      return left(new ResourceNotFoundError())
    }

    await this.movieRepository.delete(movie)

    return right({})
  }
}
