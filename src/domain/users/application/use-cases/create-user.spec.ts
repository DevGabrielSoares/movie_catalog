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
    const { user } = await sut.execute({
      name: 'nome 1',
      email: 'email@email.com',
      password: 'senha555',
    })

    expect(user.id).toBeTruthy()
    expect(inMemoryUsersRepository.items[0].id).toEqual(user.id)
  })
})
