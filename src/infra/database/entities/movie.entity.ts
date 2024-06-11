import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'movie' })
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column({ type: 'varchar' })
  title: string

  @Column({ type: 'varchar' })
  director: string

  @Column({ type: 'varchar', array: true })
  genre: string[]

  @Column({ type: 'date' })
  release: Date

  @Column({ type: 'varchar' })
  synopsis: string

  @Column({ type: 'varchar', array: true })
  cast: string[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt?: Date
}
