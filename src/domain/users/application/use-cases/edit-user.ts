import { Either, left, right } from '@/core/either'
import { User } from '../../enterprise/entities/user'
import { UsersRepository } from '../repositories/users-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '@/infra/database/entities/user.entity'
import { Repository } from 'typeorm'
import { hash } from 'bcryptjs'

export interface EditUserUseCaseRequest {
  id: string
  name: string
  email: string
  password: string
}

type EditUserUseCaseResponse = Either<ResourceNotFoundError, { user: User }>

export class EditUserUseCase {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async execute({
    id,
    name,
    email,
    password,
  }: EditUserUseCaseRequest): Promise<EditUserUseCaseResponse> {
    const user = await this.userRepository.findOneBy({ id })

    if (!user) {
      return left(new ResourceNotFoundError())
    }

    const hashedPassword = await hash(password, 8)

    user.name = name
    user.email = email
    user.password = hashedPassword

    await this.userRepository.save(user)

    return right({ user })
  }
}
