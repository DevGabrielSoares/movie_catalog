import { Either, left, right } from '@/core/either'
import { User } from '../../enterprise/entities/user'
import { UsersRepository } from '../repositories/users-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

interface EditUserUseCaseRequest {
  userId: string
  name: string
  email: string
  password: string
}

type EditUserUseCaseResponse = Either<ResourceNotFoundError, { user: User }>

export class EditUserUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({
    userId,
    name,
    email,
    password,
  }: EditUserUseCaseRequest): Promise<EditUserUseCaseResponse> {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      return left(new ResourceNotFoundError())
    }

    user.name = name
    user.email = email
    user.password = password

    await this.userRepository.save(user)

    return right({ user })
  }
}
