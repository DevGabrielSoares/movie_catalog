import {
  CreateUserUseCase,
  CreateUserUseCaseRequest,
} from '@/domain/users/application/use-cases/create-user'
import { Body, Controller, Post } from '@nestjs/common'

@Controller('/accounts')
export class CreateAccountController {
  constructor(private createAccountService: CreateUserUseCase) {}

  @Post()
  async handle(@Body() user: CreateUserUseCaseRequest) {
    const { name, email, password } = user

    await this.createAccountService.execute({ name, email, password })
  }
}
