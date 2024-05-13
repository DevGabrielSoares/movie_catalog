import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { DeleteUserUseCase } from './delete-user'
import { makeUser } from 'test/factories/make-user'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: DeleteUserUseCase

describe('Delete User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new DeleteUserUseCase(inMemoryUsersRepository)
  })

  it('should be able to delete a user by id', async () => {
    const newUser = makeUser({}, new UniqueEntityID('user-1'))

    await inMemoryUsersRepository.create(newUser)

    await sut.execute({
      userId: 'user-1',
    })

    expect(inMemoryUsersRepository.items).toHaveLength(0)
  })
})
