import {
  EditUserWithParamUseCase,
  EditUserWithParamUseCaseRequest,
} from '@/domain/users/application/use-cases/edit-user-with-param'
import { Body, Controller, Param, Patch } from '@nestjs/common'

@Controller('/accounts')
export class EditAccountController {
  constructor(private editAccountService: EditUserWithParamUseCase) {}

  @Patch('/edit')
  async handle(@Body() user: EditUserWithParamUseCaseRequest) {
    const { id, email, name, password } = user

    return await this.editAccountService.execute({
      id,
      email,
      name,
      password,
    })
  }
}
