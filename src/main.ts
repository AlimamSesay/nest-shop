import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  // app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [
      'http://localhost:4200', // angular
      'http://192.168.1.4:5000' // angular local prod
    ],
  });
  app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');

}
bootstrap();
