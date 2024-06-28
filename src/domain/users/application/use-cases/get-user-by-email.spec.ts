import { describe, it, expect, beforeEach, vi } from 'vitest'
import { GetUserByEmailUseCase } from './get-user-by-email'
import { Repository } from 'typeorm'
import { UserEntity } from '@/infra/database/entities/user.entity'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { User } from '../../enterprise/entities/user'

describe('Get User By Email', () => {
  let sut: GetUserByEmailUseCase
  let userRepository: Repository<UserEntity>

  beforeEach(() => {
    userRepository = new Repository<UserEntity>()

    sut = new GetUserByEmailUseCase(userRepository)

    vi.spyOn(userRepository, 'findOneBy').mockImplementation(
      async ({ email }) => {
        if (email === 'example-email') {
          return {
            id: '1',
            name: 'Example User',
            email: 'example-email',
            password: 'hashedpassword',
          } as UserEntity
        }
        return null
      },
    )
  })

  it('should be able to get a user by email', async () => {
    const result = await sut.execute({
      email: 'example-email',
    })

    expect(result.isRight()).toBe(true)
    expect(result.value?.user).toEqual({
      id: '1',
      name: 'Example User',
      email: 'example-email',
      password: 'hashedpassword',
    })
  })

  it('should return an error if user is not found', async () => {
    const result = await sut.execute({
      email: 'non-existent-email',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
  })
})
