import { Either, right } from '@/core/either'
import { UserEntity } from '@/infra/database/entities/user.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { hash } from 'bcryptjs'
import { Repository } from 'typeorm'
import { User } from '../../enterprise/entities/user'

export interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
}

type CreateUserUseCaseResponse = Either<null, { user: User }>

@Injectable()
export class CreateUserUseCase {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async execute({
    name,
    email,
    password,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const hashedPassword = await hash(password, 8)

    const user = {
      name,
      email,
      password: hashedPassword,
    }

    await this.userRepository.save(user)

    return right({ user })
  }
}
