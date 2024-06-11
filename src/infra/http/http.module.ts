import { Module } from '@nestjs/common'
import { CreateAccountController } from './users/controllers/create-account.controller'
import { CreateUserUseCase } from '@/domain/users/application/use-cases/create-user'

@Module({
  imports: [],
  controllers: [CreateAccountController],
  providers: [CreateUserUseCase],
})
export class HttpModule {}
