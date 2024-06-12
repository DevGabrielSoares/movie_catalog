import { Module } from '@nestjs/common'
import { CreateAccountController } from './users/controllers/create-account.controller'
import { CreateUserUseCase } from '@/domain/users/application/use-cases/create-user'
import { DatabaseModule } from '../database/database.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '@/domain/users/enterprise/entities/user'

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([User])
  ],
  controllers: [CreateAccountController],
  providers: [CreateUserUseCase],
})
export class HttpModule {}
