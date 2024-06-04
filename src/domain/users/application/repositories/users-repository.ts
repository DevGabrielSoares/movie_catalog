import { User } from '@/domain/users/enterprise/entities/user'

export interface UsersRepository {
  findById(id: string): Promise<User | null>
  findAll(): Promise<User[]>
  findByEmail(email: string): Promise<User | null>
  save(user: User): Promise<void>
  create(user: User): Promise<void>
  delete(user: User): Promise<void>
}
