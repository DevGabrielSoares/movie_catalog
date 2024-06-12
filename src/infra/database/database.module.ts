import { User } from '@/domain/users/enterprise/entities/user'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'mks',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule { }
