import { Movie } from '@/domain/movies/enterprise/entities/movie'
import { User } from '@/domain/users/enterprise/entities/user'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'mks',
      entities: [User, Movie],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
