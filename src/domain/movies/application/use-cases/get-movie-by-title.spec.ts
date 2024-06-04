import { InMemoryMoviesRepository } from 'test/repositories/in-memory-movies-repository'
import { GetMovieByTitleUseCase } from './get-movie-by-title'
import { makeMovie } from 'test/factories/make-movie'
let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: GetMovieByTitleUseCase

describe('Get Movie By Title', () => {
  beforeEach(() => {
    inMemoryMoviesRepository = new InMemoryMoviesRepository()
    sut = new GetMovieByTitleUseCase(inMemoryMoviesRepository)
  })

  it('should be able to get a movie by title', async () => {
    const newMovie = makeMovie({
      title: 'example-movie',
    })

    await inMemoryMoviesRepository.create(newMovie)

    const result = await sut.execute({
      title: 'example-movie',
    })

    expect(result.value?.movie.title).toEqual(newMovie.title)
  })
})
