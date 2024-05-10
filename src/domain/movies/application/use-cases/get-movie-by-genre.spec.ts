import { InMemoryMoviesRepository } from 'test/repositories/in-memory-movies-repository'
import { GetMovieByGenreUseCase } from './get-movie-by-genre'
import { makeMovie } from 'test/factories/make-movie'
let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: GetMovieByGenreUseCase

describe('Get Movie By Genre', () => {
  beforeEach(() => {
    inMemoryMoviesRepository = new InMemoryMoviesRepository()
    sut = new GetMovieByGenreUseCase(inMemoryMoviesRepository)
  })

  it('should be able to get a movie by genre', async () => {
    const newMovie = makeMovie({
      genre: ['horror', 'action'],
    })

    await inMemoryMoviesRepository.create(newMovie)

    const { movie } = await sut.execute({
      genre: 'horror',
    })

    expect(movie.filter((item) => item.genre === newMovie.genre))
  })

  it('should be not able to get a movie by genre', async () => {
    const newMovie = makeMovie({
      genre: ['horror', 'action'],
    })

    await inMemoryMoviesRepository.create(newMovie)

    expect(() => {
      return sut.execute({
        genre: 'wrongGenre',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
