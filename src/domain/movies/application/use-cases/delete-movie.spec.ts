import { InMemoryMoviesRepository } from 'test/repositories/in-memory-movies-repository'
import { DeleteMovieUseCase } from './delete-movie'
import { makeMovie } from 'test/factories/make-movie'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: DeleteMovieUseCase

describe('Delete Movie', () => {
  beforeEach(() => {
    inMemoryMoviesRepository = new InMemoryMoviesRepository()
    sut = new DeleteMovieUseCase(inMemoryMoviesRepository)
  })

  it('should be able to delete a movie by id', async () => {
    const newMovie = makeMovie({}, new UniqueEntityID('movie-1'))

    await inMemoryMoviesRepository.create(newMovie)

    await sut.execute({
      movieId: 'movie-1',
    })

    expect(inMemoryMoviesRepository.items).toHaveLength(0)
  })
})
