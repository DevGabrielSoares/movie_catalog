import { Either, right } from '@/core/either'
import { User } from '../../enterprise/entities/user'
import { UsersRepository } from '../repositories/users-repository'
import { hash } from 'bcryptjs'
import { Injectable } from '@nestjs/common'

interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
}

type CreateUserUseCaseResponse = Either<null, { user: User }>

@Injectable()
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

    return right({ user })
  }
}
