import { Either, right } from '@/core/either'
import { Movie } from '../../enterprise/entities/movie'
import { MoviesRepository } from '../repositories/movies-repository'

interface CreateMovieUseCaseRequest {
  title: string
  director: string
  genre: string[]
  release: Date
  synopsis: string
  cast: string[]
}

type CreateMovieUseCaseResponse = Either<null, { movie: Movie }>

export class CreateMovieUseCase {
  constructor(private movieRepository: MoviesRepository) {}

  async execute({
    title,
    director,
    genre,
    release,
    synopsis,
    cast,
  }: CreateMovieUseCaseRequest): Promise<CreateMovieUseCaseResponse> {
    const movie = Movie.create({
      title,
      director,
      genre,
      release,
      synopsis,
      cast,
    })

    await this.movieRepository.create(movie)

    return right({ movie })
  }
}
