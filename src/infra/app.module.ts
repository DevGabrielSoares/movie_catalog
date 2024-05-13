import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { envSchema } from '@/env'
import { dataSourceModuleOptions } from './database/typeorm/data-source/data-source'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceModuleOptions),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
