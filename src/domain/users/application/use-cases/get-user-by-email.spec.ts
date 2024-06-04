import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { GetUserByEmailUseCase } from './get-user-by-email'
import { makeUser } from 'test/factories/make-user'
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: GetUserByEmailUseCase

describe('Get User By Email', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new GetUserByEmailUseCase(inMemoryUsersRepository)
  })

  it('should be able to get a user by email', async () => {
    const newUser = makeUser({
      email: 'example-email',
    })

    await inMemoryUsersRepository.create(newUser)

    const result = await sut.execute({
      email: 'example-email',
    })

    expect(result.value?.user.email).toEqual(newUser.email)
  })
})
