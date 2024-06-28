import { Either, left, right } from '@/core/either'
import { User } from '../../enterprise/entities/user'
import { UsersRepository } from '../repositories/users-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '@/infra/database/entities/user.entity'
import { Repository } from 'typeorm'

type GetUsersUseCaseResponse = Either<ResourceNotFoundError, { user: User[] }>

export class GetUsersUseCase {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async execute(): Promise<GetUsersUseCaseResponse> {
    const users = await this.userRepository.find()

    if (!users) {
      return left(new ResourceNotFoundError())
    }

    return right({ users })
  }
}
