import { Either, left, right } from '@/core/either'
import { Movie } from '../../enterprise/entities/movie'
import { MoviesRepository } from '../repositories/movies-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

interface EditMovieUseCaseRequest {
  movieId: string
  title: string
  director: string
  genre: string[]
  release: Date
  synopsis: string
  cast: string[]
}

type EditMovieUseCaseResponse = Either<ResourceNotFoundError, { movie: Movie }>

export class EditMovieUseCase {
  constructor(private movieRepository: MoviesRepository) {}

  async execute({
    movieId,
    title,
    director,
    genre,
    release,
    synopsis,
    cast,
  }: EditMovieUseCaseRequest): Promise<EditMovieUseCaseResponse> {
    const movie = await this.movieRepository.findById(movieId)

    if (!movie) {
      return left(new ResourceNotFoundError())
    }

    movie.title = title
    movie.director = director
    movie.synopsis = synopsis
    movie.cast = cast
    movie.release = release
    movie.genre = genre

    await this.movieRepository.save(movie)

    return right({ movie })
  }
}
