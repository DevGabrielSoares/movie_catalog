import { GetUserByEmailUseCase } from '@/domain/users/application/use-cases/get-user-by-email'
import { Body, Controller, Get, Param, Query } from '@nestjs/common'

@Controller('/accounts')
export class GetAccountByEmailController {
  constructor(private getAccountByEmailService: GetUserByEmailUseCase) {}

  @Get('/by-email')
  async handle(@Body('email') email: string) {
    const user = await this.getAccountByEmailService.execute({ email })

    return user
  }
}
