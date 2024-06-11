import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CreateAccountController } from './http/users/controllers/create-account.controller'
import { HttpModule } from './http/http.module'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
