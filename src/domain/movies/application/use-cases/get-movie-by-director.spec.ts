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

    const result = await sut.execute({
      director: 'diretor',
    })
    expect(
      result.value?.movie.filter((item) => item.director === newMovie.director),
    )
  })
})
