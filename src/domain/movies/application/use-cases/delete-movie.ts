import { MoviesRepository } from '../repositories/movies-repository'

interface DeleteMovieUseCaseRequest {
  movieId: string
}

interface DeleteMovieUseCaseResponse {}

export class DeleteMovieUseCase {
  constructor(private movieRepository: MoviesRepository) {}

  async execute({
    movieId,
  }: DeleteMovieUseCaseRequest): Promise<DeleteMovieUseCaseResponse> {
    const movie = await this.movieRepository.findById(movieId)

    if (!movie) {
      throw new Error('Movie not found.')
    }

    await this.movieRepository.delete(movie)

    return {}
  }
}
