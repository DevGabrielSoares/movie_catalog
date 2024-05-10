import { MoviesRepository } from '@/domain/movies/application/repositories/movies-repository'
import { Movie } from '@/domain/movies/enterprise/entities/movie'

export class InMemoryMoviesRepository implements MoviesRepository {
  public items: Movie[] = []

  async findById(id: string) {
    const movie = this.items.find((item) => item.id.toString() === id)

    if (!movie) {
      return null
    }

    return movie
  }

  async findByTitle(title: string) {
    const movie = this.items.find((item) => item.title === title)

    if (!movie) {
      return null
    }

    return movie
  }

  async findByDirector(director: string) {
    const movie = this.items.filter((item) => item.director === director)

    if (!movie) {
      return null
    }

    return movie
  }

  async findByCast(cast: string) {
    const movie = this.items.filter((item) => item.cast.includes(cast))

    if (!movie) {
      return null
    }

    return movie
  }

  async findByGenre(cast: string) {
    const movie = this.items.filter((item) => item.genre.includes(cast))

    if (!movie) {
      return null
    }

    return movie
  }

  async findAll() {
    const movie = this.items.find((item) => item)

    if (!movie) {
      return null
    }

    return movie
  }

  async create(movie: Movie) {
    this.items.push(movie)
  }

  async save(movie: Movie) {
    const itemIndex = this.items.findIndex((item) => item.id === movie.id)

    this.items[itemIndex] = movie
  }

  async delete(movie: Movie): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === movie.id)

    this.items.splice(itemIndex, 1)
  }
}
