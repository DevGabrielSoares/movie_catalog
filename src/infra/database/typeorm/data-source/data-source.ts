import { DataSource } from 'typeorm'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USERNAME,
  password: String(process.env.POSTGRES_PASSWORD),
  database: process.env.POSTGRES_DATABASE,
  port: parseInt(process.env.POSTGRES_PORT),
  synchronize: true,
  entities: ['../resources/entities/' + '*-schema.{.ts, .ts}'],
  migrations: ['../migrations/*.{.ts, .js}'],
})

dataSource.initialize()

export const dataSourceModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: String(process.env.POSTGRES_PASSWORD),
  database: process.env.POSTGRES_DATABASE,
  entities: ['../resources/entities/' + '*-schema.{.ts, .ts}'],
  migrations: ['../migrations/*.{.ts, .js}'],
  synchronize: true,
}
