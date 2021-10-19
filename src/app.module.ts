import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './routes/user/user.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://root:12345678@localhost:27017', {
      useNewUrlParser: true,
      dbName: 'jellydash',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
