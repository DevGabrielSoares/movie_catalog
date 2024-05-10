import { InMemoryMoviesRepository } from 'test/repositories/in-memory-movies-repository'
import { GetMovieByDirectorUseCase } from './get-movie-by-director'
import { makeMovie } from 'test/factories/make-movie'
let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: GetMovieByDirectorUseCase

describe('Get Movie By Director', () => {
  beforeEach(() => {
    inMemoryMoviesRepository = new InMemoryMoviesRepository()
    sut = new GetMovieByDirectorUseCase(inMemoryMoviesRepository)
  })

  it('should be able to get a movie by director', async () => {
    const newMovie = makeMovie({
      director: 'diretor',
    })

    await inMemoryMoviesRepository.create(newMovie)

    const { movie } = await sut.execute({
      director: 'diretor',
    })
    expect(movie.filter((item) => item.director === newMovie.director))
  })

  it('should be not able to get a movie by director', async () => {
    const newMovie = makeMovie({
      director: 'diretor',
    })

    await inMemoryMoviesRepository.create(newMovie)

    expect(() => {
      return sut.execute({
        director: 'wrongDirector',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
