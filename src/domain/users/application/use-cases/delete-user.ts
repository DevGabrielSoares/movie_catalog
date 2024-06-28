import { Either, left, right } from '@/core/either'
import { UsersRepository } from '../repositories/users-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '@/infra/database/entities/user.entity'
import { Repository } from 'typeorm'

interface DeleteUserUseCaseRequest {
  id: string
}

type DeleteUserUseCaseResponse = Either<ResourceNotFoundError, void>

export class DeleteUserUseCase {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async execute({
    id,
  }: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {
    const user = await this.userRepository.findOne({ where: { id } })

    if (!user) {
      return left(new ResourceNotFoundError())
    }

    await this.userRepository.delete(user)

    return right({})
  }
}
