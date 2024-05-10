import { InMemoryMoviesRepository } from 'test/repositories/in-memory-movies-repository'
import { makeMovie } from 'test/factories/make-movie'
import { GetNewMovieUseCase } from './get-new-movie'
import { release } from 'os'
let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: GetNewMovieUseCase

describe('Get Movie If Is New', () => {
  beforeEach(() => {
    inMemoryMoviesRepository = new InMemoryMoviesRepository()
    sut = new GetNewMovieUseCase(inMemoryMoviesRepository)
  })

  it('should be able to get new movies', async () => {
    const newMovie = makeMovie()

    await inMemoryMoviesRepository.create(newMovie)

    const { movie } = await sut.execute()

    expect(movie.isNew).toBeTruthy()
  })

  it('should be not able to get new movies', async () => {
    const newMovie = makeMovie({
      release: new Date('2020-01-05'),
    })

    await inMemoryMoviesRepository.create(newMovie)

    expect(() => {
      return sut.execute()
    }).rejects.toBeInstanceOf(Error)
  })
})
