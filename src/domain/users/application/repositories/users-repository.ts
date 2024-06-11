import { User } from '@/domain/users/enterprise/entities/user'

export abstract class UsersRepository {
  abstract findById(id: string): Promise<User | null>
  abstract findAll(): Promise<User[]>
  abstract findByEmail(email: string): Promise<User | null>
  abstract save(user: User): Promise<void>
  abstract create(user: User): Promise<void>
  abstract delete(user: User): Promise<void>
}
