import { InMemoryMoviesRepository } from 'test/repositories/in-memory-movies-repository'
import { GetMovieByCastUseCase } from './get-movie-by-cast'
import { makeMovie } from 'test/factories/make-movie'
let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: GetMovieByCastUseCase

describe('Get Movie By Cast', () => {
  beforeEach(() => {
    inMemoryMoviesRepository = new InMemoryMoviesRepository()
    sut = new GetMovieByCastUseCase(inMemoryMoviesRepository)
  })

  it('should be able to get a movie by cast', async () => {
    const newMovie = makeMovie({
      cast: ['ana aranha', 'fernando frango'],
    })

    await inMemoryMoviesRepository.create(newMovie)

    const result = await sut.execute({
      cast: 'ana aranha',
    })

    expect(result.value?.movie.filter((item) => item.cast === newMovie.cast))
  })
})
