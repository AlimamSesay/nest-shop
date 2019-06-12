import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events/events.gateway';
// import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    // TypeOrmModule.forRoot(),
    // GraphQLModule.forRoot({
    //   // debug: false,
    //   // playground: false,
    //   installSubscriptionHandlers: true,
    //   autoSchemaFile: 'schema.gql',
    // }),
    
  ],
  controllers: [AppController],
  providers: [EventsGateway, AppService],
})
export class AppModule { }
