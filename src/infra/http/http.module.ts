import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/users/create-account.controller'
import { CreateUserUseCase } from '@/domain/users/application/use-cases/create-user'
import { DatabaseModule } from '../database/database.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '@/domain/users/enterprise/entities/user'
import { Movie } from '@/domain/movies/enterprise/entities/movie'

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([User, Movie])],
  controllers: [CreateAccountController],
  providers: [CreateUserUseCase],
})
export class HttpModule {}
