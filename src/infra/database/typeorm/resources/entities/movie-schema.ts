import { Movie } from '@/domain/movies/enterprise/entities/movie'
import { EntitySchema } from 'typeorm'

export const MovieSchema = new EntitySchema<Movie>({
  name: 'movie',
  tableName: 'movies',
  target: Movie,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },

    title: {
      type: 'string',
    },

    synopsis: {
      type: 'text',
    },

    director: {
      type: 'string',
    },

    cast: {
      type: 'string',
      array: true,
    },

    genre: {
      type: 'string',
      array: true,
    },

    release: {
      type: 'date',
    },

    createdAt: {
      type: 'time with time zone',
      createDate: true,
    },

    updatedAt: {
      type: 'time with time zone',
      updateDate: true,
    },
  },
})
