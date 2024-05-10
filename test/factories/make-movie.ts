import { faker } from '@faker-js/faker'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Movie, MovieProps } from '@/domain/movies/enterprise/entities/movie'

export function makeMovie(
  override: Partial<MovieProps> = {},
  id?: UniqueEntityID,
) {
  const movie = Movie.create(
    {
      title: faker.music.songName(),
      director: faker.person.fullName(),
      genre: [faker.music.genre(), faker.music.genre()],
      release: faker.date.recent(),
      synopsis: faker.lorem.text(),
      cast: [faker.person.fullName(), faker.person.fullName()],
      createdAt: new Date(),
      ...override,
    },
    id,
  )

  return movie
}
