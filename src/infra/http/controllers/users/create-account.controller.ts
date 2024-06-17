import { CreateUserUseCase } from '@/domain/users/application/use-cases/create-user'
import { Controller, Post } from '@nestjs/common'

@Controller('/accounts')
export class CreateAccountController {
  constructor(private createAccountService: CreateUserUseCase) {}

  @Post()
  async handle() {
    const name = 'john doe'
    const email = 'johndoe@email.com'
    const password = '123'

    await this.createAccountService.execute({ name, email, password })
  }
}
