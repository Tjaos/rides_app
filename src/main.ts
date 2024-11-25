import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { existsSync, unlinkSync } from 'fs';

async function bootstrap() {
  const dbFile = 'db.rides.sqlite';
  if (existsSync(dbFile)) unlinkSync(dbFile);
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    })
  )
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
