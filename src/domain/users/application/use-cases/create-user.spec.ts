import { describe, it, expect, beforeEach, vi } from 'vitest'
import { CreateUserUseCase } from './create-user'
import { Repository } from 'typeorm'
import { UserEntity } from '@/infra/database/entities/user.entity'
import { hash } from 'bcryptjs'

describe('Create User', () => {
  let sut: CreateUserUseCase
  let userRepository: Repository<UserEntity>

  beforeEach(() => {
    userRepository = new Repository<UserEntity>()

    sut = new CreateUserUseCase(userRepository)

    // Mock the save method
    vi.spyOn(userRepository, 'save').mockImplementation(
      async (user: UserEntity) => {
        user.id = Math.random().toString(36).substring(7) // Mock an ID
        return user
      },
    )
  })

  it('should be able to create a user', async () => {
    const userRequest = {
      name: 'nome 1',
      email: 'email@email.com',
      password: 'senha555',
    }

    const result = await sut.execute(userRequest)

    expect(result.isRight()).toBe(true)
    expect(result.value?.user).toEqual({
      id: expect.any(String),
      name: userRequest.name,
      email: userRequest.email,
      password: result.value.user.password,
    })
  })
})
