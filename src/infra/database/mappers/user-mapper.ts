import { User } from '@/domain/users/enterprise/entities/user'
import { UserEntity } from '../entities/user.entity'

export class UserMapper {
  static toDomain(raw: UserEntity): User {
    return User.create(raw)
  }

  static toEntity(domainUser: User): UserEntity {
    const { id, name, email, password, createdAt, updatedAt } = domainUser
    const entity = new UserEntity()
    entity.id = id?.toString()
    entity.name = name
    entity.email = email
    entity.password = password
    entity.createdAt = createdAt
    entity.updatedAt = updatedAt
    return entity
  }
}
