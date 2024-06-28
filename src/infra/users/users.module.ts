import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateUserUseCase } from '@/domain/users/application/use-cases/create-user'
import { DatabaseModule } from '../database/database.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../database/entities/user.entity'
import { GetAccountByEmailController } from './controllers/get-account-by-email.controller'
import { GetUserByEmailUseCase } from '@/domain/users/application/use-cases/get-user-by-email'
import { EditAccountController } from './controllers/edit-account.controller'
import { GetAccountsController } from './controllers/find-all-accounts.controller'
import { GetUsersUseCase } from '@/domain/users/application/use-cases/find-all-users'
import { EditUserWithParamUseCase } from '@/domain/users/application/use-cases/edit-user-with-param'

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [
    CreateAccountController,
    GetAccountByEmailController,
    EditAccountController,
    GetAccountsController,
  ],
  providers: [
    CreateUserUseCase,
    GetUserByEmailUseCase,
    EditUserWithParamUseCase,
    GetUsersUseCase,
  ],
})
export class UsersModule {}
