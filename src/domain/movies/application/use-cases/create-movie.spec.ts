import { CreateMovieUseCase } from './create-movie'
import { InMemoryMoviesRepository } from 'test/repositories/in-memory-movies-repository'

let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: CreateMovieUseCase

describe('Create Movie', () => {
  beforeEach(() => {
    inMemoryMoviesRepository = new InMemoryMoviesRepository()
    sut = new CreateMovieUseCase(inMemoryMoviesRepository)
  })

  it('should be able to create a movie', async () => {
    const { movie } = await sut.execute({
      title: 'Filme 1',
      director: 'Diretor 1',
      genre: ['Genre 1'],
      cast: ['cast 1'],
      release: new Date(),
      synopsis: 'eueueueue',
    })

    expect(movie.id).toBeTruthy()
    expect(inMemoryMoviesRepository.items[0].id).toEqual(movie.id)
  })
})
