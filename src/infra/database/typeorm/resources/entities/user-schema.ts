import { User } from '@/domain/users/enterprise/entities/user'
import { EntitySchema } from 'typeorm'

export const UserSchema = new EntitySchema<User>({
  name: 'user',
  tableName: 'users',
  target: User,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },

    name: {
      type: 'string',
    },

    email: {
      type: 'string',
      unique: true,
    },

    password: {
      type: 'string',
    },

    createdAt: {
      type: 'time with time zone',
      createDate: true,
    },

    updatedAt: {
      type: 'time with time zone',
      updateDate: true,
    },
  },
})
