import { GetUsersUseCase } from '@/domain/users/application/use-cases/find-all-users'
import { GetUserByEmailUseCase } from '@/domain/users/application/use-cases/get-user-by-email'
import { Body, Controller, Get, Param, Query } from '@nestjs/common'

@Controller('/accounts')
export class GetAccountsController {
  constructor(private getAccountsService: GetUsersUseCase) {}

  @Get('/find-all')
  async handle() {
    const user = await this.getAccountsService.execute()

    return user
  }
}
