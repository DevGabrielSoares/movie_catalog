import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/users/create-account.controller'
import { CreateUserUseCase } from '@/domain/users/application/use-cases/create-user'
import { DatabaseModule } from '../database/database.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '@/domain/users/enterprise/entities/user'
import { Movie } from '@/domain/movies/enterprise/entities/movie'
import { UserEntity } from '../database/entities/user.entity'
import { MovieEntity } from '../database/entities/movie.entity'

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserEntity, MovieEntity])],
  controllers: [CreateAccountController],
  providers: [CreateUserUseCase],
})
export class HttpModule {}
