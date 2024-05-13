import { UsersRepository } from '../repositories/users-repository'

interface DeleteUserUseCaseRequest {
  userId: string
}

interface DeleteUserUseCaseResponse {}

export class DeleteUserUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({
    userId,
  }: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      throw new Error('User not found.')
    }

    await this.userRepository.delete(user)

    return {}
  }
}
