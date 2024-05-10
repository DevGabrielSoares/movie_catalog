import { Movie } from '@/domain/movies/enterprise/entities/movie'

export interface MoviesRepository {
  findById(id: string): Promise<Movie | null>
  findAll(): Promise<Movie | null>
  findByTitle(title: string): Promise<Movie | null>
  findByDirector(title: string): Promise<Movie[] | null>
  findByCast(cast: string): Promise<Movie[] | null>
  findByGenre(genre: string): Promise<Movie[] | null>
  save(movie: Movie): Promise<void>
  create(movie: Movie): Promise<void>
  delete(movie: Movie): Promise<void>
}
