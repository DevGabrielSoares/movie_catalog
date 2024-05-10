import dayjs from 'dayjs'
import { Entity } from '@/core/entities/entity'
import { Optional } from '@/core/types/optional'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface MovieProps {
  title: string
  director: string
  genre: string[]
  release: Date
  synopsis: string
  cast: string[]
  createdAt: Date
  updatedAt?: Date
}

export class Movie extends Entity<MovieProps> {
  get title() {
    return this.props.title
  }

  get director() {
    return this.props.director
  }

  get genre() {
    return this.props.genre
  }

  get release() {
    return this.props.release
  }

  get synopsis() {
    return this.props.synopsis
  }

  get cast() {
    return this.props.cast
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get isNew(): boolean {
    return dayjs().diff(this.release, 'month') <= 3
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set title(title: string) {
    this.props.title = title
    this.touch()
  }

  set director(title: string) {
    this.props.director = this.director
    this.touch()
  }

  set release(release: Date) {
    this.props.release = release
    this.touch()
  }

  set synopsis(synopsis: string) {
    this.props.synopsis = synopsis
    this.touch()
  }

  set genre(genre: string[]) {
    this.props.genre = genre
    this.touch()
  }

  set cast(cast: string[]) {
    this.props.cast = cast
    this.touch()
  }

  static create(props: Optional<MovieProps, 'createdAt'>, id?: UniqueEntityID) {
    const movie = new Movie(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return movie
  }
}
