import { Either, left, right } from '@/core/either'
import { User } from '../../enterprise/entities/user'
import { UsersRepository } from '../repositories/users-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '@/infra/database/entities/user.entity'
import { Repository } from 'typeorm'

interface GetUserByEmailUseCaseRequest {
  email: string
}

type GetUserByEmailUseCaseResponse = Either<
  ResourceNotFoundError,
  { user: User }
>

export class GetUserByEmailUseCase {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async execute({
    email,
  }: GetUserByEmailUseCaseRequest): Promise<GetUserByEmailUseCaseResponse> {
    const userEnity = await this.userRepository.findOne({ where: { email } })

    const user = {
      name: userEnity.name,
      email: userEnity.email,
      password: userEnity.password,
    }

    if (!user) {
      return left(new ResourceNotFoundError())
    }

    return right({ user })
  }
}
