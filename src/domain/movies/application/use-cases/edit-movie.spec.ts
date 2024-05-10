import { InMemoryMoviesRepository } from 'test/repositories/in-memory-movies-repository'
import { EditMovieUseCase } from './edit-movie'
import { makeMovie } from 'test/factories/make-movie'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: EditMovieUseCase

describe('Edit Movie', () => {
  beforeEach(() => {
    inMemoryMoviesRepository = new InMemoryMoviesRepository()
    sut = new EditMovieUseCase(inMemoryMoviesRepository)
  })

  it('should be able to edit a movie by id', async () => {
    const newMovie = makeMovie({}, new UniqueEntityID('movie-1'))

    await inMemoryMoviesRepository.create(newMovie)

    await sut.execute({
      movieId: newMovie.id.toValue(),
      title: 'Filme teste',
      director: 'Diretor teste',
      genre: ['romance', 'terror'],
      cast: ['adriana calcanhoto'],
      release: new Date(),
      synopsis: 'filme ruim',
    })

    expect(inMemoryMoviesRepository.items[0]).toMatchObject({
      title: 'Filme teste',
      synopsis: 'filme ruim',
    })
  })
})
