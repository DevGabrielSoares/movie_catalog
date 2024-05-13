import { User } from '../../enterprise/entities/user'
import { UsersRepository } from '../repositories/users-repository'

interface EditUserUseCaseRequest {
  userId: string
  name: string
  email: string
  password: string
}

interface EditUserUseCaseResponse {
  user: User
}

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
      throw new Error('User not found.')
    }

    user.name = name
    user.email = email
    user.password = password

    await this.userRepository.save(user)

    return {
      user,
    }
  }
}
