import { Either, left, right } from '@/core/either'
import { User } from '../../enterprise/entities/user'
import { UsersRepository } from '../repositories/users-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '@/infra/database/entities/user.entity'
import { Repository } from 'typeorm'
import { hash } from 'bcryptjs'

export interface EditUserWithParamUseCaseRequest {
  id: string
  name?: string
  email?: string
  password?: string
}

type EditUserWithParamUseCaseResponse = Either<
  ResourceNotFoundError,
  { user: User }
>

export class EditUserWithParamUseCase {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async execute({
    id,
    name,
    email,
    password,
  }: EditUserWithParamUseCaseRequest): Promise<EditUserWithParamUseCaseResponse> {
    const exisingUser = await this.userRepository.findOne({ where: { id } })

    if (!exisingUser) {
      return left(new ResourceNotFoundError())
    }

    if (password) {
      const hashedPassword = await hash(password, 8)
      const user = this.userRepository.merge(exisingUser, {
        name,
        email,
        password: hashedPassword,
      })

      await this.userRepository.save(user)

      return right({ user: { name, email } })
    }

    const user = this.userRepository.merge(exisingUser, {
      name,
      email,
    })

    await this.userRepository.save(user)

    return right({ user: { name, email } })
  }
}
