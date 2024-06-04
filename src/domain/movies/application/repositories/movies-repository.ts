import { Movie } from '@/domain/movies/enterprise/entities/movie'

export interface MoviesRepository {
  findById(id: string): Promise<Movie | null>
  findAll(): Promise<Movie[]>
  findByTitle(title: string): Promise<Movie | null>
  findByDirector(director: string): Promise<Movie[]>
  findByCast(cast: string): Promise<Movie[]>
  findByGenre(genre: string): Promise<Movie[]>
  save(movie: Movie): Promise<void>
  create(movie: Movie): Promise<void>
  delete(movie: Movie): Promise<void>
}
