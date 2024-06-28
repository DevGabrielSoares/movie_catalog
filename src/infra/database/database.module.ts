import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MovieEntity } from './entities/movie.entity'
import { UserEntity } from './entities/user.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'mks',
      entities: [UserEntity, MovieEntity],
      synchronize: true,
      migrations: [],
    }),
  ],
})
export class DatabaseModule {}
