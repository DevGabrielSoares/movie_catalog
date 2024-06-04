import { Either, left, right } from '@/core/either'
import { User } from '../../enterprise/entities/user'
import { UsersRepository } from '../repositories/users-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

interface GetUserByEmailUseCaseRequest {
  email: string
}

type GetUserByEmailUseCaseResponse = Either<
  ResourceNotFoundError,
  { user: User }
>

export class GetUserByEmailUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
  }: GetUserByEmailUseCaseRequest): Promise<GetUserByEmailUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      return left(new ResourceNotFoundError())
    }

    return right({ user })
  }
}
