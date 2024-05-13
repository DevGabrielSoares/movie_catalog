import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { EditUserUseCase } from './edit-user'
import { makeUser } from 'test/factories/make-user'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: EditUserUseCase

describe('Edit User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new EditUserUseCase(inMemoryUsersRepository)
  })

  it('should be able to edit a user by id', async () => {
    const newUser = makeUser({}, new UniqueEntityID('user-1'))

    await inMemoryUsersRepository.create(newUser)

    await sut.execute({
      userId: newUser.id.toValue(),
      name: 'nome teste',
      email: 'email teste',
      password: 'senha1',
    })

    expect(inMemoryUsersRepository.items[0]).toMatchObject({
      name: 'nome teste',
      email: 'email teste',
    })
  })
})
