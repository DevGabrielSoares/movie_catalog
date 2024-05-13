import { User } from '../../enterprise/entities/user'
import { UsersRepository } from '../repositories/users-repository'
import { hash } from 'bcryptjs'

interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
}

interface CreateUserUseCaseResponse {
  user: User
}

export class CreateUserUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({
    name,
    email,
    password,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const hashedPassword = await hash(password, 8)

    const user = User.create({
      name,
      email,
      password: hashedPassword,
    })

    await this.userRepository.create(user)

    return {
      user,
    }
  }
}
