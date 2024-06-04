import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
// import { envSchema } from '@/env'
// import { dataSourceModuleOptions } from './database/typeorm/data-source/data-source'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'docker',
      port: 5432,
      database: 'mks',
      synchronize: true,
    }),
    /* TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService], 
    }), */
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
