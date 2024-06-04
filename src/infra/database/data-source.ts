import { DataSource } from 'typeorm'

export const databaseProviders = {
  provide: 'POSTGRES_DATASOURCE',
  useFactory: async () => {
    const dataSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'mks',
      synchronize: true,
    })

    return dataSource.initialize()
  },
}
