import { Either, right } from '@/core/either'
import { Movie } from '../../enterprise/entities/movie'
import { MoviesRepository } from '../repositories/movies-repository'

interface GetMovieByGenreUseCaseRequest {
  genre: string
}

type GetMovieByGenreUseCaseResponse = Either<null, { movie: Movie[] }>

export class GetMovieByGenreUseCase {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute({
    genre,
  }: GetMovieByGenreUseCaseRequest): Promise<GetMovieByGenreUseCaseResponse> {
    const movie = await this.moviesRepository.findByGenre(genre)

    return right({ movie })
  }
}
