import { CreateUserUseCase } from './create-user'
import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: CreateUserUseCase

describe('Create User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new CreateUserUseCase(inMemoryUsersRepository)
  })

  it('should be able to create a user', async () => {
    const result = await sut.execute({
      name: 'nome 1',
      email: 'email@email.com',
      password: 'senha555',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryUsersRepository.items[0]).toEqual(result.value?.user)
  })
})
